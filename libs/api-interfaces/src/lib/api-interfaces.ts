import { Validate, ValidateNested } from 'class-validator';
import { FileExists } from '../../../../apps/api/src/app/app.validator.service';
import { Type } from 'class-transformer';

export interface ITranscodeRequest {

  filePath: string;
}

export class TranscodeRequest implements ITranscodeRequest {

  @Validate(FileExists)
  filePath: string = 'bad';
}

export class Transcode {

  @ValidateNested()
  @Type(() => TranscodeRequest)
  data: TranscodeRequest = new TranscodeRequest();
}
