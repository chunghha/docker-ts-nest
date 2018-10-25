import {Controller, Get, HttpStatus, Param, Res, Response} from '@nestjs/common';
import {ApiImplicitParam, ApiOperation, ApiResponse, ApiUseTags} from '@nestjs/swagger';
import {AxiosResponse} from 'axios';

import {UpperCasePipe} from '../uppercase.pipe';

import {ExchangeService} from './exchange.service';

@ApiUseTags('hello') @Controller()
export class ExchangeController {
  constructor(private exchangeService: ExchangeService) {}

  @ApiOperation({title: 'Return Exchange Rate per request'})
  @ApiResponse({status: 200, description: 'Successful response'})
  @ApiImplicitParam({name: 'from', required: true, type: String})
  @ApiImplicitParam({name: 'to', required: true, type: String})
  @Get('/:from/:to')
  public rate<T>(
      @Param('from', new UpperCasePipe()) from: string,
      @Param('to', new UpperCasePipe()) to: string, @Res() response) {
    const rate: Rate = {
      from,
      to,
    };

    this.exchangeService.getRate(from, to).subscribe(
        (res: AxiosResponse<Fixer>) => {
          rate.rate = res.data.rates[to] as number;

          response.send(JSON.stringify(rate));
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
