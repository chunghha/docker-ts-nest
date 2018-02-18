import {Controller, Get, HttpStatus, Param, Res, Response} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiUseTags} from '@nestjs/swagger';
import {fromPromise} from 'rxjs/observable/fromPromise';

import {ExchangeService} from './exchange.service';

@ApiUseTags('hello') @Controller('rate')
export class ExchangeController {
  constructor(private exchangeService: ExchangeService) {}

  @ApiOperation({title: 'Return Exchange Rate per request'})
  @ApiResponse({status: 200, description: 'Successful response'})
  @Get('/:from/:to')
  rate(@Param('from') from: string, @Param('to') to: string, @Res() response) {
    const rate: Rate = {
      from,
      to,
    };

    fromPromise(this.exchangeService.getRate(from, to))
        .subscribe((res: string) => {
          rate.rate = res;

          response.status(HttpStatus.OK).json(rate);
        });
  }
}

interface Rate {
  from?: string;
  to?: string;
  rate?: string;
}
