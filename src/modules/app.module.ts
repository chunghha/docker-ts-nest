import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { EchoModule } from './echo/echo.module';
import { JobModule } from './job/job.module';
import { RootController } from './root.controller';
import { routes } from './routes';
import { registerWinston } from './shared/functions/register-winston';

@Module({
	controllers: [RootController],
	// * retire ExchangeModule because API KEY is now in need.
	imports: [RouterModule.register(routes), EchoModule, JobModule, registerWinston()]
})
export class ApplicationModule {}
