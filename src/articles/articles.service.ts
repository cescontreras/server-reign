import { HttpService, Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Article } from "./interfaces/articles.interface";
import { CreateArticleDTO } from "./dto/articles.dto";
import { Observable } from 'rxjs';
import Axios, { AxiosResponse } from "axios";
import { map } from 'rxjs/operators';


@Injectable()
export class ArticleService {
  private readonly dataUrl = 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs';
  constructor(@InjectModel('Article') readonly articleModel: Model<Article>, private readonly http: HttpService) {}

  async getArticles(): Promise<Article[]> {
    const articles = await this.articleModel.find().sort({creationDate: 'desc'})  
    return articles
  }

  async postArticles(post: CreateArticleDTO): Promise<Article> {
    const article = new this.articleModel(post);
    return article.save();      
  }

  async deleteArticle(productID: string): Promise<Article> {
    const deleted = await this.articleModel.findByIdAndDelete(productID);
    return deleted
  }

  async updateArticle(articleID: string, createArticleDTO: CreateArticleDTO): Promise<Article> {
    const updated = await this.articleModel
                        .findByIdAndUpdate(articleID, createArticleDTO, {new: true});
    return updated;
  }

  async getData(): Promise<Observable<Object[]>> {
    return await Axios.get(this.dataUrl, {
      headers: {
        'Content-Type': 'application/json'
      }}
    ).then((res) => {
      return res.data.hits
    })      
  }
}