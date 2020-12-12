import { HttpModule, Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticleService } from './articles.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema } from "./schemas/articles.schema";

@Module({
  imports: [ HttpModule,
    MongooseModule.forFeature([
      { name: 'Article', schema: ArticleSchema }
    ])
  ],
  controllers: [ArticlesController],
  providers: [ArticleService],
  exports: [ArticleService]
})
export class ArticlesModule {}
