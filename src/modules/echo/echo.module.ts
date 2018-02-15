import {MiddlewaresConsumer, Module} from '@nestjs/common';

import {HelmetMiddleware} from '@nest-middlewares/helmet';
import {IHelmetConfiguration} from 'helmet';
import {ResponseTimeMiddleware} from '@nest-middlewares/response-time';
import {ResponseTimeOptions} from 'response-time';


import {EchoController} from './echo.controller';

@Module({
  controllers: [EchoController],
})
export class EchoModule {

  configure(consumer: MiddlewaresConsumer) {
    HelmetMiddleware.configure(this.getHelmetConfiguration());
    ResponseTimeMiddleware.configure(this.getResponseTimeOptions());
    consumer.apply(HelmetMiddleware).forRoutes(EchoController);
    consumer.apply(ResponseTimeMiddleware).forRoutes(EchoController);
  }

  private getHelmetConfiguration(): IHelmetConfiguration {
    const helmetConfiguration: IHelmetConfiguration = {
      // default helmet configuration
    }

    return helmetConfiguration;
  }

  private getResponseTimeOptions(): ResponseTimeOptions {
    const responseTimeOptions: ResponseTimeOptions = {
      // default response-time options
    }

    return responseTimeOptions;
  }
}
