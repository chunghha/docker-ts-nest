import {Module} from '@nestjs/common';

import {EchoModule} from './echo/echo.module';
import {RootController} from './root.controller';

@Module({
  modules: [EchoModule],
  controllers: [RootController],
})
export class ApplicationModule {
}
