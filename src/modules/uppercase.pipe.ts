import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UpperCasePipe implements PipeTransform<string> {
	/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
	public async transform(value: string, metadata: ArgumentMetadata) {
		if (!value) {
			return value;
		}
		if (typeof value !== 'string') {
			throw new BadRequestException('UpperCase transform failed');
		}
		return value.toUpperCase();
	}
}
