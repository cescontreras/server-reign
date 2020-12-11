import { HttpService, Injectable } from '@nestjs/common';
import { connection } from 'mongoose';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  } 

  // async dropDatabase() {    
  //   const conn = connection.useDb('articlesNode')
  //   await conn.dropDatabase()    
  // }
}
