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
    
    return this.articleModel.findOneAndUpdate(
      {articleID: post.articleID}, 
      {$setOnInsert: post}, 
      {upsert: true, new: true, setDefaultsOnInsert: true}, 
      function(err, article){
        if(err) console.log(err);  
        return article        
    })
       
  }

  async deleteArticle(productID: string): Promise<Article> {
    const deleted = await this.articleModel.findByIdAndDelete(productID);
    return deleted
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