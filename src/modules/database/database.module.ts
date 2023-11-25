import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  providers: [
    {
      provide: 'API_EXAMPLE',
      useValue: '123456',
    },
  ],
  exports: ['API_EXAMPLE'],
})
export class DatabaseModule {}
