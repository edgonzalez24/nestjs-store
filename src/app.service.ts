import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_EXAMPLE') private api_example: string,
    // @Inject('API_TASKS') private api_tasks: string,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    // console.log(
    //   '🚀 ~ file: app.service.ts:9 ~ AppService ~ api_tasks:',
    //   this.api_tasks,
    // );
    return 'Hello World! This is key example: ' + this.configService.apiKey;
  }
}
