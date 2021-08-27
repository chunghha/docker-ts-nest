import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';

import { EchoModule } from './echo/echo.module';
import { JobModule } from './job/job.module';
import { RootController } from './root.controller';
import { routes } from './routes';
import { registerWinston } from './shared/functions/register-winston';

@Module({
	controllers: [RootController],
	// * retire ExchangeModule because API KEY is now in need.
	// imports: [RouterModule.forRoutes(routes), EchoModule, JobModule, registerWinston()]
	// * suppress JobModule to report swagger version issue.
	imports: [RouterModule.forRoutes(routes), EchoModule, registerWinston()]
})
export class ApplicationModule {}
