import {Component} from '@nestjs/common';

import * as axios from 'axios';

@Component()
export class ExchangeService {
  async getRate(from: string, to: string): Promise<string> {
    return await axios.default.get(`http://api.fixer.io/latest?base=${from}`)
        .then((res) => {
          return res.data.rates[to] as string;
        });
  }
}
