import { Test, TestingModule } from '@nestjs/testing';
import { CronService } from './cron.service';

describe('CronService', () => {
  let service: CronService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CronService,
          useFactory: () => ({
            get: jest.fn(() => {}),
            getScheduled: jest.fn(() => {})
          })
        }
      ],
    }).compile();

    service = module.get<CronService>(CronService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should not have been call instantly', () => {
    expect(service.getScheduled).not.toHaveBeenCalled()
  })
});
