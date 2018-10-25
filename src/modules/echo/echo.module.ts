import {HelmetMiddleware} from '@nest-middlewares/helmet';
import {ResponseTimeMiddleware} from '@nest-middlewares/response-time';
import {MiddlewareConsumer, Module} from '@nestjs/common';

import {SharedModule} from '../shared/shared.module';

import {EchoController} from './echo.controller';

@Module({
  controllers: [EchoController],
  imports: [SharedModule],
})
export class EchoModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(HelmetMiddleware)
        .with('EchoModule')
        .forRoutes(EchoController);
    consumer.apply(ResponseTimeMiddleware)
        .with('EchoModule')
        .forRoutes(EchoController);
  }
}
