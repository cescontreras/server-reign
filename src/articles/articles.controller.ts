import { Controller, Post, Get, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { CreateArticleDTO } from './dto/articles.dto';
import { ArticleService } from "./articles.service";

@Controller('articles')
export class ArticlesController {

  constructor(private articleService: ArticleService){}

  @Post('/create')
  async createPost(@Res() res, @Body() createArticleDTO: CreateArticleDTO) {
    const article = await this.articleService.postArticles(createArticleDTO)      
    return res.status(HttpStatus.OK).json({message: 'Creado', article})
  }

  @Get('/')
  async getArticle(@Res() res) {
    const articles = await this.articleService.getArticles();
    res.status(HttpStatus.OK).json({message: 'Articulos', articles})
  }

  @Delete('/delete/:articleId')
  async deleteArticle(@Res() res, @Param('articleId') articleId) {
    const deleted = await this.articleService.deleteArticle(articleId)
    res.status(HttpStatus.OK).json({message: 'Eliminado', deleted})
  }
}
