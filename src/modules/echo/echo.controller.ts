import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('hello')
@Controller()
export class EchoController {
	@ApiOperation({ summary: 'Echo input on request to response' })
	@ApiResponse({ status: 200, description: 'Successful response' })
	@Get('/:input')
	public echo(@Param('input') input: string): Message {
		return { echo: input };
	}
}

interface Message {
	echo?: string;
}
