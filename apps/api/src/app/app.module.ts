import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule} from '../../../../libs/nest-database/src';
// @ts-ignore
import { NestSharedModule } from '@class-validator-monorepo/nest-shared';
import { FileExists } from './app.validator.service';

@Module({
  imports: [DatabaseModule, NestSharedModule],
  controllers: [AppController],
  providers: [AppService, FileExists],
})
export class AppModule {}
