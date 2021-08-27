import { Controller, Get, Inject, Param, Version } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Logger } from 'winston';

@ApiTags('hello')
@Controller()
export class EchoV2Controller {
	constructor(@Inject('winston') private readonly logger: Logger) {}

	@ApiOperation({ summary: 'Echo input on request to response - v2' })
	@ApiResponse({ status: 200, description: 'Successful response' })
	@Version('2')
	@Get('/:input')
	public echoV2(@Param('input') input: string): Message {
		const message = { echo: input, version: 'v2' };
		this.logger.info(message);

		return message;
	}
}

interface Message {
	echo?: string;
	version?: string;
}
