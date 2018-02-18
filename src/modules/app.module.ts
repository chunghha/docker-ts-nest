import {Module} from '@nestjs/common';

import {EchoModule} from './echo/echo.module';
import {ExchangeModule} from './exchange/exchange.module';
import {RootController} from './root.controller';

@Module({
  modules: [EchoModule, ExchangeModule],
  controllers: [RootController],
})
export class ApplicationModule {}
