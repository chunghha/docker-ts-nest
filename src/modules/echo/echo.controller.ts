import {Controller, Get, HttpStatus, Param, Response} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiUseTags} from '@nestjs/swagger';

@ApiUseTags('hello') @Controller()
export class EchoController {
  @ApiOperation({title: 'Echo input on request to response'})
  @ApiResponse({status: 200, description: 'Successful response'})
  @Get('/:input')
  echo(@Param('input') input: string): Message {
    const message: Message = {echo: input};

    return message;
  }
}

interface Message {
  echo?: string;
}
