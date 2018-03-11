import {Body, Controller, Get, HttpStatus, Param, Post, Response} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiUseTags} from '@nestjs/swagger';

import {Job, Queue} from 'bull';
import {InjectQueue} from 'nest-bull';

@ApiUseTags('hello') @Controller('job')
export class JobController {
  constructor(
      @InjectQueue('store') readonly queue: Queue,
  ) {}

  @ApiOperation({title: 'Add job to queue'})
  @ApiResponse({status: 200, description: 'Successful response'})
  @Post('/add')
  async addJob<T>(@Body() value: T) {
    const job: Job = await this.queue.add(value);
    return job.id;
  }

  @ApiOperation({title: 'Return job per id requested'})
  @ApiResponse({status: 200, description: 'Successful response'})
  @Get('/get/:id')
  async getJob(@Param('id') id: string) {
    return await this.queue.getJob(id);
  }
}
