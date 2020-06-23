import { Injectable } from '@nestjs/common';
import { TranscodeRequest } from '@class-validator-monorepo/api-interfaces';

@Injectable()
export class AppService {
  async  getData(filepath:string): Promise<TranscodeRequest> {
    return { filePath: filepath };
  }
}
