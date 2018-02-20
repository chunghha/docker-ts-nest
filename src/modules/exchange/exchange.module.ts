import { HelmetMiddleware } from '@nest-middlewares/helmet';
import { ResponseTimeMiddleware } from '@nest-middlewares/response-time';
import { MiddlewaresConsumer, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/common/http';

import { ExchangeController } from './exchange.controller';
import { ExchangeService } from './exchange.service';
import { SharedModule } from '../shared/shared.module';

@Module({
  controllers: [ExchangeController],
  components: [ExchangeService],
  exports: [ExchangeService],
  imports: [HttpModule, SharedModule]
})
export class ExchangeModule {
  configure(consumer: MiddlewaresConsumer) {
    consumer.apply(HelmetMiddleware).with('ExchangeModule').forRoutes(ExchangeController);
    consumer.apply(ResponseTimeMiddleware).with('ExchangeModule').forRoutes(ExchangeController);
  }
}
