import {HttpService, Injectable} from '@nestjs/common';
import {AxiosResponse} from 'axios';

import {Observable} from 'rxjs';

@Injectable()
export class ExchangeService {
  constructor(private readonly httpService: HttpService) {}

  public getRate<T>(from: string, to: string): Observable<AxiosResponse<T>> {
    return this.httpService.get(`https://api.exchangeratesapi.io/latest?base=${from}`);
  }
}
