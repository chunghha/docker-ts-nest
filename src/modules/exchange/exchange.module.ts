import { CorsMiddleware } from '@nest-middlewares/cors';
import { HelmetMiddleware } from '@nest-middlewares/helmet';
import { ResponseTimeMiddleware } from '@nest-middlewares/response-time';
import { HttpModule, MiddlewareConsumer, Module } from '@nestjs/common';

import { SharedModule } from '../shared/shared.module';
import { ExchangeController } from './exchange.controller';
import { ExchangeService } from './exchange.service';

@Module({
	controllers: [ExchangeController],
	imports: [HttpModule, SharedModule],
	providers: [ExchangeService]
})
export class ExchangeModule {
	public configure(consumer: MiddlewareConsumer): void {
		consumer.apply(CorsMiddleware, HelmetMiddleware, ResponseTimeMiddleware).forRoutes('rate');
	}
}
