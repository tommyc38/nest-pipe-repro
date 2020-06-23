import { Validate } from 'class-validator';
import { FileExists } from '../../../../apps/api/src/app/app.validator.service';

export interface ITranscodeRequest {

  filePath: string;
}

export class TranscodeRequest implements ITranscodeRequest{

  @Validate(FileExists)
  filePath: string;
}
