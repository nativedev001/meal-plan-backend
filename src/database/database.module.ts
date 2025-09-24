import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseCheckService } from './database-check.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGO_URI,
        dbName: 'mealplanner', 
      }),
    }),
  ],
  providers: [DatabaseCheckService],
  exports: [MongooseModule, DatabaseCheckService],
})
export class DatabaseModule {}
