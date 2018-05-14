import {HelmetMiddleware} from '@nest-middlewares/helmet';
import {ResponseTimeMiddleware} from '@nest-middlewares/response-time';
import {MiddlewareConsumer, Module} from '@nestjs/common';

import {DoneCallback, Job} from 'bull';
import {BullModule} from 'nest-bull';

import {SharedModule} from '../shared/shared.module';
import {JobController} from './job.controller';

@Module({
  controllers: [JobController],
  imports: [
    BullModule.forRoot({
      name: 'store',
      options: {
        redis: {
          port: 6379,
        },
      },
      processors: [
        (job: Job, done: DoneCallback) => {
          done(null, job.data);
        },
      ],
    }),
    SharedModule
  ],
})
export class JobModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HelmetMiddleware).with('JobModule').forRoutes(JobController);
    consumer.apply(ResponseTimeMiddleware)
        .with('JobModule')
        .forRoutes(JobController);
  }
}
