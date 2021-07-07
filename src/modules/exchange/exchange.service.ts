import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class ExchangeService {
	constructor(private readonly httpService: HttpService) {}

	getRate<T>(from: string): Observable<AxiosResponse<T>> {
		return this.httpService.get(`https://api.frankfurter.app/latest?base=${from}`);
	}
}
