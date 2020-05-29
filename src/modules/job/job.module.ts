import { CorsMiddleware } from '@nest-middlewares/cors';
import { HelmetMiddleware } from '@nest-middlewares/helmet';
import { ResponseTimeMiddleware } from '@nest-middlewares/response-time';
import { BullModule, BullModuleOptions } from '@nestjs/bull';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { DoneCallback, Job } from 'bull';

import { SharedModule } from '../shared/shared.module';
import { JobController } from './job.controller';

const REDIS_PORT = +process.env.REDIS_PORT || 6379;
const BullQueueModule = BullModule.registerQueueAsync({
	name: 'store',
	inject: [],
	useFactory: async (): Promise<BullModuleOptions> => ({
		redis: {
			host: 'redis',
			port: REDIS_PORT
		},
		processors: [
			(job: Job, done: DoneCallback) => {
				done(undefined, job.data);
			}
		]
	})
});

@Module({
	controllers: [JobController],
	imports: [BullQueueModule, SharedModule]
})
export class JobModule {
	public configure(consumer: MiddlewareConsumer): void {
		consumer.apply(CorsMiddleware, HelmetMiddleware, ResponseTimeMiddleware).forRoutes('job');
	}
}
