import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './nest-database.service';

@Global()
@Module({
  controllers: [],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
