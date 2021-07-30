import { Controller, Get, Param, Version } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('hello')
@Controller()
export class EchoV2Controller {
	@ApiOperation({ summary: 'Echo input on request to response - v2' })
	@ApiResponse({ status: 200, description: 'Successful response' })
	@Version('2')
	@Get('/:input')
	public echoV2(@Param('input') input: string): Message {
		return { echo: input, version: 'v2' };
	}
}

interface Message {
	echo?: string;
	version?: string;
}
