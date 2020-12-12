import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from "@nestjs/schedule";
import { CronService } from './cron/cron.service';

@Module({
  imports: [
    ArticlesModule, 
    MongooseModule.forRoot('mongodb://localhost/articlesNode', 
      { useFindAndModify: false }),
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService, CronService],
})


export class AppModule {}
