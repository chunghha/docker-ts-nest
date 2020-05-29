import { Controller, Get, Param, Res } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AxiosResponse } from 'axios';

import { UpperCasePipe } from '../uppercase.pipe';
import { ExchangeService } from './exchange.service';
import { Rate } from './rate.model';

@ApiTags('hello')
@Controller()
export class ExchangeController {
	constructor(private exchangeService: ExchangeService) {}

	@ApiOperation({ summary: 'Return Exchange Rate per request' })
	@ApiResponse({ status: 200, description: 'Successful response' })
	@ApiParam({ name: 'from', required: true, type: String })
	@ApiParam({ name: 'to', required: true, type: String })
	@Get('/:from/:to')
	/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */
	public rate<T>(
		@Param('from', new UpperCasePipe()) from: string,
		@Param('to', new UpperCasePipe()) to: string,
		@Res() response
	): void {
		const rate: Rate = {
			from,
			to
		};

		this.exchangeService.getRate(from, to).subscribe((res: AxiosResponse<Fixer>) => {
			rate.rate = res.data.rates[to] as number;

			response.send(JSON.stringify(rate));
		});
	}
}

interface Fixer {
	rates: number[];
}
