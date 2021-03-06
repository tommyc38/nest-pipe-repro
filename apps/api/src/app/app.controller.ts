import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';

import { Transcode, TranscodeRequest } from '@class-validator-monorepo/api-interfaces';

import { AppService } from './app.service';
import { FileExistPipe } from './app.validator.service';
// @ts-ignore
import { DatabaseService } from '@class-validator-monorepo/nest-database';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private db: DatabaseService) {}

  @Get()
  get(){
    return this.db.checkFileExists('true');
  }

  @Post()
    async getData(@Body(ValidationPipe) transcodeRequest: Transcode): Promise<TranscodeRequest> {
    return await this.appService.getData(transcodeRequest.data.filePath);
  }
}
