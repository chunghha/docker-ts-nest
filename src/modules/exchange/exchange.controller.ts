import {Controller, Get, HttpStatus, Param, Res, Response} from '@nestjs/common';
import {AxiosResponse} from '@nestjs/common/http/interfaces/axios.interfaces';
import {ApiOperation, ApiResponse, ApiUseTags} from '@nestjs/swagger';

import {ExchangeService} from './exchange.service';

@ApiUseTags('hello') @Controller('rate')
export class ExchangeController {
  constructor(private exchangeService: ExchangeService) {}

  @ApiOperation({title: 'Return Exchange Rate per request'})
  @ApiResponse({status: 200, description: 'Successful response'})
  @Get('/:from/:to')
  rate<T>(
      @Param('from') from: string, @Param('to') to: string, @Res() response) {
    const rate: Rate = {
      from,
      to,
    };

    this.exchangeService.getRate(from, to).subscribe(
        (res: AxiosResponse<Fixer>) => {
          rate.rate = res.data.rates[to] as number;

          response.status(HttpStatus.OK).json(rate);
        });
  }
}

interface Rate {
  from?: string;
  to?: string;
  rate?: number;
}

interface Fixer {
  rates: number[];
}
