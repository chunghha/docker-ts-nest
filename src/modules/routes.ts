import { Routes } from 'nest-router';

import { EchoModule } from './echo/echo.module';
import { ExchangeModule } from './exchange/exchange.module';
import { JobModule } from './job/job.module';

export const routes: Routes = [
  {
    path: '/echo',
    module: EchoModule
  },
  {
    path: '/rate',
    module: ExchangeModule
  },
  {
    path: 'job',
    module: JobModule
  }
];
