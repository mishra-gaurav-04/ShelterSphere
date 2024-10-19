import { Injectable } from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import { PrismaOrmService } from 'src/prisma-orm/prisma-orm.service';

@Injectable()
export class AuthService {}
