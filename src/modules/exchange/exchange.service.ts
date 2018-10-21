import {Injectable} from '@nestjs/common';
import {HttpService} from '@nestjs/common/http';
import {AxiosResponse} from '@nestjs/common/node_modules/axios';

import {Observable} from 'rxjs';

@Injectable()
export class ExchangeService {
  constructor(private readonly httpService: HttpService) {}

  getRate<T>(from: string, to: string): Observable<AxiosResponse<T>> {
    return this.httpService.get(`https://api.exchangeratesapi.io/latest?base=${from}`);
  }
}
