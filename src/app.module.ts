import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleService } from './articles/articles.service';

@Module({
  imports: [ArticlesModule, MongooseModule.forRoot('mongodb://localhost/articlesNode', {useCreateIndex: true, useFindAndModify: false})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
