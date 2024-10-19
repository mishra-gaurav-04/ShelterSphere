import {ObjectSchema} from 'joi';
import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform,Logger} from '@nestjs/common';

@Injectable()
export class JoiValidationPipe implements PipeTransform{
    private readonly logger = new Logger();
    constructor(private schema : ObjectSchema) {}
    async transform(value: any, metadata: ArgumentMetadata) {
        const {error} = await this.schema.validateAsync(value);

        if(error){
            this.logger.error(`{error:Validation Failed, message : ${error.message}}`)
            throw new BadRequestException("validation failed");
        }

        return value;
    }
}