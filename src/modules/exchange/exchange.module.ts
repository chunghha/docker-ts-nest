import {HelmetMiddleware} from '@nest-middlewares/helmet';
import {ResponseTimeMiddleware} from '@nest-middlewares/response-time';
import {MiddlewareConsumer, Module} from '@nestjs/common';
import {HttpModule} from '@nestjs/common/http';

import {SharedModule} from '../shared/shared.module';

import {ExchangeController} from './exchange.controller';
import {ExchangeService} from './exchange.service';

@Module({
  controllers: [ExchangeController],
  providers: [ExchangeService],
  imports: [HttpModule, SharedModule]
})
export class ExchangeModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HelmetMiddleware)
        .with('ExchangeModule')
        .forRoutes(ExchangeController);
    consumer.apply(ResponseTimeMiddleware)
        .with('ExchangeModule')
        .forRoutes(ExchangeController);
  }
}
