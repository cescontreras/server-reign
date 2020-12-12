import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let spyService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
        provide: AppService,
        useFactory: () => ({
          getHello: jest.fn(() => "Hello World!")
        })
        }
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    spyService = app.get<AppService>(AppService);     
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(spyService.getHello()).toBe('Hello World!');
    });

    it('should have been called', () => {
      appController.getHello();
      expect(spyService.getHello).toHaveBeenCalled();
    });
    
  });
});
