import {Module} from '@nestjs/common';

import {EchoModule} from './echo/echo.module';
import {ExchangeModule} from './exchange/exchange.module';
import {JobModule} from './job/job.module';
import {RootController} from './root.controller';

@Module({
  modules: [EchoModule, ExchangeModule, JobModule],
  controllers: [RootController],
})
export class ApplicationModule {}
