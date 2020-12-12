import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';
import { AppService } from '../app.service';

@Injectable()
export class CronService {
  constructor(private AppService: AppService) {}

  @Timeout(100)
  async get() {
    try {
      await this.AppService.getData();      
    } catch (err) {
      console.log(err);        
    }
  }

  @Cron(CronExpression.EVERY_HOUR)
  async getScheduled() {
    try {
      await this.AppService.getData();
      console.log('Hourly Refresh OK');        
    } catch (err) {
      console.log(err);        
    }
  }
}

