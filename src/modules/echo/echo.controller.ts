import {Controller, Get, HttpStatus, Param, Response} from '@nestjs/common';

@Controller('echo')
export class EchoController {
  @Get('/:input')
  public echo(@Response() res, @Param('input') input) {
    const message: MESSAGE = {
      echo: input,
    };
    res.status(HttpStatus.OK).json(message);
  }
}

interface MESSAGE {
  echo?: string;
}