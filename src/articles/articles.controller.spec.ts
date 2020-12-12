import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import { ArticleService } from './articles.service';
import { CreateArticleDTO } from './dto/articles.dto';

describe('ArticlesController', () => {
  let controller: ArticlesController;
  let spyService: ArticleService;

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [
        {
          provide: ArticleService,
          useFactory: () => ({
            getArticles: jest.fn(() => []),
            postArticles: jest.fn(() => [])
          })
        }
       ]
    }).compile();

    spyService = module.get<ArticleService>(ArticleService)
    controller = module.get<ArticlesController>(ArticlesController);
   
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have been called', () => {
    controller.getArticle();
    expect(spyService.getArticles).toHaveBeenCalled();
  })

  it('should post article', () => { 
    const args: any = {
      title: 'titulo',
      author: 'author',
      url: 'url',
      creationDate: 'creationDate',
      articleID: '000001'
    }   
    const params = new CreateArticleDTO(args) 
    controller.createPost(params);
    expect(spyService.postArticles).toHaveBeenCalledWith(params)
  })
});
