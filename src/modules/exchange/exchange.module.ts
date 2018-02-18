import {HelmetMiddleware} from '@nest-middlewares/helmet';
import {ResponseTimeMiddleware} from '@nest-middlewares/response-time';
import {MiddlewaresConsumer, Module} from '@nestjs/common';
import {IHelmetConfiguration} from 'helmet';
import {ResponseTimeOptions} from 'response-time';

import {ExchangeController} from './exchange.controller';
import {ExchangeService} from './exchange.service';

@Module({
  controllers: [ExchangeController],
  components: [ExchangeService],
  exports: [ExchangeService]
})
export class ExchangeModule {
  configure(consumer: MiddlewaresConsumer) {
    HelmetMiddleware.configure(this.getHelmetConfiguration());
    ResponseTimeMiddleware.configure(this.getResponseTimeOptions());
    consumer.apply(HelmetMiddleware).forRoutes(ExchangeController);
    consumer.apply(ResponseTimeMiddleware).forRoutes(ExchangeController);
  }

  private getHelmetConfiguration(): IHelmetConfiguration {
    const helmetConfiguration: IHelmetConfiguration = {
        // default helmet configuration
    };

    return helmetConfiguration;
  }

  private getResponseTimeOptions(): ResponseTimeOptions {
    const responseTimeOptions: ResponseTimeOptions = {
        // default response-time options
    };

    return responseTimeOptions;
  }
}
