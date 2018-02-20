import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import * as express from 'express';
import * as request from 'supertest';

import { ApplicationModule } from '../src/modules/app.module';

describe('App /', () => {
  let server;
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [ApplicationModule],
    })
      .compile();

    server = express();
    app = module.createNestApplication(server);
    await app.init();
  });

  it('should return 200 OK', () => {
    return request(server).get('/')
      .expect(200);
  });

  it('should return 200 OK', () => {
    return request(server).get('/echo/hello')
      .expect(200);
  });

  it('should return 200 OK', () => {
    return request(server).get('/rate/USD/EUR')
      .expect(200);
  });
});
