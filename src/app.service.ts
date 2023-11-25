import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_EXAMPLE') private api_example: string,
    // @Inject('API_TASKS') private api_tasks: string,
    private config: ConfigService,
  ) {}
  getHello(): string {
    // console.log(
    //   '🚀 ~ file: app.service.ts:9 ~ AppService ~ api_tasks:',
    //   this.api_tasks,
    // );
    return 'Hello World! This is key example: ' + this.config.get('API_KEY');
  }
}
