import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_EXAMPLE') private api_example: string,
    @Inject('API_TASKS') private api_tasks: string,
  ) {}
  getHello(): string {
    // console.log(
    //   '🚀 ~ file: app.service.ts:9 ~ AppService ~ api_tasks:',
    //   this.api_tasks,
    // );
    return 'Hello World! This is key example: ' + this.api_example;
  }
}
