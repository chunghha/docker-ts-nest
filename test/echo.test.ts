import { RouterModule } from '@nestjs/core';
import { Test } from '@nestjs/testing';
import request, { SuperTest, Test as AppTest }  from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { EchoModule } from '../src/modules/echo/echo.module';
import { registerWinston } from '../src/modules/shared/functions/register-winston';
import { routes } from '../src/modules/routes';



describe('Echo Module', () => {
  let app;
  let server: SuperTest<AppTest>;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [ RouterModule.register(routes), EchoModule, registerWinston()],
    })
      .compile();

    app = module.createNestApplication();
    await app.init();

    server = request(app.getHttpServer())
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return 200 OK', () => {
    return server.get('/echo/hello').expect(200);
  });

  it('should return the response expected', () => {
    const expected = {
      echo: 'hello'
    };

    return server.get('/echo/hello').expect(200),expect(expected);
  });

});
