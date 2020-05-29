import { InjectQueue } from '@nestjs/bull';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Job, Queue } from 'bull';

import { JobId } from './job.model';

@ApiTags('hello')
@Controller()
export class JobController {
	constructor(@InjectQueue('store') readonly queue: Queue) {}

	@ApiOperation({ summary: 'Add job to queue' })
	@ApiResponse({ status: 200, description: 'Successful response' })
	@Post('/add')
	/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */
	public async addJob<T, V>(@Body() value: T): Promise<JobId> {
		const job: Job = await this.queue.add(value);
		return { id: job.id };
	}

	@ApiOperation({ summary: 'Return job per id requested' })
	@ApiResponse({ status: 200, description: 'Successful response' })
	@Get('/get/:id')
	/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */
	public async getJob<T>(@Param('id') id: string): Promise<Job<T>> {
		return this.queue.getJob(id);
	}
}
