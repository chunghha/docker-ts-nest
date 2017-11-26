import {Controller, Get, HttpStatus, Response} from '@nestjs/common';
import {ApiUseTags} from '@nestjs/swagger';

@ApiUseTags('hello')
@Controller()
export class RootController {
  @Get('/')
  public greet(@Response() res) {
    res.status(HttpStatus.OK).send('Hello, World');
  }
}
