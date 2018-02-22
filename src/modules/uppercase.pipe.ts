
import {ArgumentMetadata, BadRequestException, HttpStatus, Pipe, PipeTransform} from '@nestjs/common';

@Pipe()
export class UpperCasePipe implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata) {
    if (!value) return value;
    if (typeof value !== 'string') {
      throw new BadRequestException('UpperCase transform failed');
    }
    return value.toUpperCase();
  }
}
