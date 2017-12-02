import {Controller, Get, HttpStatus, Response} from '@nestjs/common';
import {ApiUseTags} from '@nestjs/swagger';

@ApiUseTags('hello') @Controller()
export class RootController {
  @Get('/')
  greet(@Response() res) {
    res.status(HttpStatus.OK).send('Hello, World');
  }
}
