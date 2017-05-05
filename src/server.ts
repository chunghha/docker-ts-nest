import {Express} from '@types/express';
import * as express from 'express';
import * as logger from 'morgan';
import {NestFactory} from 'nest.js';

import {ApplicationModule} from './modules/app.module';

const instance: Express = express();
instance.use(logger('combined'));
instance.use('/', (req, res) => {
  res.send('hello, world!');
});

const app = NestFactory.create(ApplicationModule, instance);
app.listen(3000);
