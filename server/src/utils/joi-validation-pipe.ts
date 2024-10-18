import {ObjectSchema} from 'joi';
import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common';

@Injectable()
export class JoiValidationPipe implements PipeTransform{
    constructor(private schema : ObjectSchema) {}
    async transform(value: any, metadata: ArgumentMetadata) {
        const {error} = await this.schema.validateAsync(value);

        if(error){
            console.log(error);
            throw new BadRequestException("validation failed");
        }

        return value;
    }
}