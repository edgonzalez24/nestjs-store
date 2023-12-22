import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from '../../config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'pg';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, name, password, port, host } = configService.database;
        return {
          type: 'postgres',
          username: user,
          host,
          database: name,
          password,
          port,
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'API_EXAMPLE',
      useValue: '123456',
    },
  ],
  exports: ['API_EXAMPLE', TypeOrmModule],
})
export class DatabaseModule {}
