import { Routes } from 'nest-router';

import { EchoModule } from './echo/echo.module';
import { ExchangeModule } from './exchange/exchange.module';
import { JobModule } from './job/job.module';

export const routes: Routes = [
	{
		module: EchoModule,
		path: '/echo'
	},
	{
		module: ExchangeModule,
		path: '/rate'
	},
	{
		module: JobModule,
		path: '/job'
	}
];
