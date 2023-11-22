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

@Module({
  imports: [],
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
  ],
})
export class AppModule {}
