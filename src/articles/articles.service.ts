import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Article } from "./interfaces/articles.interface";
import { CreateArticleDTO } from "./dto/articles.dto";

@Injectable()
export class ArticleService {
  
  constructor(@InjectModel('Article') readonly articleModel: Model<Article>) {}

  async getArticles(): Promise<Article[]> {
    const articles = await this.articleModel.find()
    return articles
  }

  async postArticles(createArticleDTO: CreateArticleDTO): Promise<Article> {
    const article = new this.articleModel(createArticleDTO);
    return article.save();     
  }

  async deleteArticle(productID: string): Promise<Article> {
    const deleted = await this.articleModel.findByIdAndDelete(productID);
    return deleted
  }
}