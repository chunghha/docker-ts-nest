import {Component} from '@nestjs/common';
import {HttpService} from '@nestjs/common/http';
import {AxiosResponse} from '@nestjs/common/http/interfaces/axios.interfaces';

import {Observable} from 'rxjs';

@Component()
export class ExchangeService {
  constructor(private readonly httpService: HttpService) {}

  getRate<T>(from: string, to: string): Observable<AxiosResponse<T>> {
    return this.httpService.get(`http://api.fixer.io/latest?base=${from}`);
  }
}
