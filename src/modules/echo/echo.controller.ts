import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Logger } from 'winston';

@ApiTags('hello')
@Controller()
export class EchoController {
	constructor(@Inject('winston') private readonly logger: Logger) {}

	@ApiOperation({ summary: 'Echo input on request to response' })
	@ApiResponse({ status: 200, description: 'Successful response' })
	@Get('/:input')
	public echo(@Param('input') input: string): Message {
		const message = { echo: input };
		this.logger.info(message);

		return message;
	}
}

interface Message {
	echo?: string;
}
