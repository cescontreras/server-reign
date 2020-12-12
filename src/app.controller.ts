import { Controller, Delete, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/data')
  async getRecentData(@Res() res) {
    try{
      await this.appService.getData()
      setInterval(() => {
        this.appService.getData()  
        console.log('Ok');
      }, 1000*60*60)
      res.status(HttpStatus.OK).json({message: 'Ok'})
    }catch(err){ 
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: err})
    }
  }


  // @Delete()
  // dropDatabase() {
  //   this.appService.dropDatabase();
  //   return {message: 'Drop'};
  // }
}
