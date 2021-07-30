import { CorsMiddleware } from '@nest-middlewares/cors';
import { HelmetMiddleware } from '@nest-middlewares/helmet';
import { ResponseTimeMiddleware } from '@nest-middlewares/response-time';
import { MiddlewareConsumer, Module } from '@nestjs/common';

import { SharedModule } from '../shared/shared.module';
import { EchoController } from './echo.controller';
import { EchoV2Controller } from './echo.v2.controller';

@Module({
	// * place v2 first
	controllers: [EchoV2Controller, EchoController],
	imports: [SharedModule]
})
export class EchoModule {
	public configure(consumer: MiddlewareConsumer): void {
		consumer.apply(CorsMiddleware, HelmetMiddleware, ResponseTimeMiddleware).forRoutes(EchoController);
	}
}
