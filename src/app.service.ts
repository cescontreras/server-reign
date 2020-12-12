import { Injectable } from '@nestjs/common';
import { ArticleService } from './articles/articles.service';
import { CreateArticleDTO } from './articles/dto/articles.dto';

@Injectable()
export class AppService {

  constructor(private articleService: ArticleService){}

  getHello(): string {
    return 'Hello World!';
  } 
 
  async getData() {
    try{
      const data = await this.articleService.getData();     
      await data.forEach((article: any) => {
        let dtoArticle = new CreateArticleDTO(article)
        this.articleService.postArticles(dtoArticle).catch(err => console.log(err))    
      })      
    }catch(err){
      console.log(err);        
    }
  }
}
