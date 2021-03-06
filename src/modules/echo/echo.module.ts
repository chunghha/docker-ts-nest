import { CorsMiddleware } from '@nest-middlewares/cors';
import { HelmetMiddleware } from '@nest-middlewares/helmet';
import { ResponseTimeMiddleware } from '@nest-middlewares/response-time';
import { MiddlewareConsumer, Module } from '@nestjs/common';

import { SharedModule } from '../shared/shared.module';
import { EchoController } from './echo.controller';

@Module({
	controllers: [EchoController],
	imports: [SharedModule]
})
export class EchoModule {
	public configure(consumer: MiddlewareConsumer): void {
		consumer.apply(CorsMiddleware, HelmetMiddleware, ResponseTimeMiddleware).forRoutes(EchoController);
	}
}
