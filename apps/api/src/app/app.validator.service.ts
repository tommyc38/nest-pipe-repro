import { ArgumentMetadata, BadRequestException, Injectable, mixin, PipeTransform } from '@nestjs/common';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { DatabaseService } from '../../../../libs/nest-database/src';
import memoize from "lodash.memoize";
import { ITranscodeRequest } from '@class-validator-monorepo/api-interfaces';


@ValidatorConstraint({ name: 'fileExists', async: true })
@Injectable()
export class FileExists implements ValidatorConstraintInterface {

  constructor(private db: DatabaseService) { }

  async validate(filePath: string) {
    return this.db.checkFileExists(filePath);
  }
  defaultMessage(args: ValidationArguments) {
    return 'Input file does not exist.';
  }
}

export const FileExistPipe: (filePath: string) => PipeTransform = memoize(createFileExistPipe);

function createFileExistPipe(filePath: string) {
  class MixinFileExistPipe implements PipeTransform {
    constructor(private db: DatabaseService) {}

    async transform(value: ITranscodeRequest, metadata: ArgumentMetadata) {
      console.log(filePath)
      const doesExist = await this.db.checkFileExists(filePath);
      if (!doesExist) throw new BadRequestException();
      return value;
    }
  }

  return mixin(MixinFileExistPipe);
}
