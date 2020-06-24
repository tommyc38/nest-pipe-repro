import { Validate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { FileExists } from '../../../nest-shared/src/lib/validators/validator.service';

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
