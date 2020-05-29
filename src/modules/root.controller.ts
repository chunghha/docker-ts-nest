import { Controller, Get, HttpStatus, Response } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('hello')
@Controller()
export class RootController {
	@ApiOperation({ summary: 'Respond Hello World' })
	@ApiResponse({ status: 200, description: 'Successfully response' })
	@Get('/')
	/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */
	public greet(@Response() res): void {
		res.status(HttpStatus.OK).send('Hello, World');
	}
}
