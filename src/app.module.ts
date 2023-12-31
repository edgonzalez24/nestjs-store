import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { UsersController } from './controllers/users/users.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { ProductsService } from './services/products/products.service';
import { CustomersService } from './services/customers/customers.service';
import { OrdersService } from './services/orders/orders.service';
import { UsersService } from './services/users/users.service';
import { CategoriesService } from './services/categories/categories.service';
import { BrandsService } from './services/brands/brands.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { enviroments } from 'src/enviroments';
import config from './config';
import configSchema from './configSchema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
      validationSchema: configSchema,
    }),
    HttpModule,
    DatabaseModule,
  ],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    UsersController,
    BrandsController,
    CustomersController,
    OrdersController,
  ],
  providers: [
    AppService,
    ProductsService,
    CustomersService,
    OrdersService,
    UsersService,
    CategoriesService,
    BrandsService,
    {
      provide: 'API_TASKS',
      useFactory: async (httpService: HttpService) => {
        try {
          const tasks = await httpService.get(
            'https://jsonplaceholder.typicode.com/todos',
          );
          const data = await (await firstValueFrom(tasks)).data;
          return data;
        } catch (error) {}
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
