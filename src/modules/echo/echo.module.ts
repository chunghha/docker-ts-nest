import {HelmetMiddleware} from '@nest-middlewares/helmet';
import {ResponseTimeMiddleware} from '@nest-middlewares/response-time';
import {MiddlewaresConsumer, Module} from '@nestjs/common';

import {EchoController} from './echo.controller';
import {SharedModule} from '../shared/shared.module';

@Module({
  controllers: [EchoController],
  imports: [SharedModule],
})
export class EchoModule {
  configure(consumer: MiddlewaresConsumer) {
    consumer.apply(HelmetMiddleware).with('EchoModule').forRoutes(EchoController);
    consumer.apply(ResponseTimeMiddleware).with('EchoModule').forRoutes(EchoController);
  }
}
