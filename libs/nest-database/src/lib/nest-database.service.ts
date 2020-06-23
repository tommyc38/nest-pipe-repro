import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {

  checkFileExists(filepath:string): Promise<boolean>{
  return new Promise(resolve => {
    setTimeout(() => { resolve(filepath.length % 2 === 0)},2000)
  })
  }
}
