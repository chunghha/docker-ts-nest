import {Controller, Get, HttpStatus, Response} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiUseTags} from '@nestjs/swagger';

@ApiUseTags('hello') @Controller()
export class RootController {
  @ApiOperation({title: 'Respond Hello World'})
  @ApiResponse({status: 200, description: 'Successfully response'})
  @Get('/')
  public greet(@Response() res) {
    res.status(HttpStatus.OK).send('Hello, World');
  }
}
