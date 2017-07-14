import express = require('express');
import * as logger from 'morgan';
import {NestFactory} from '@nestjs/core';

import {ApplicationModule} from './modules/app.module';

const instance = express();
instance.use(logger('combined'));
instance.use('/', (req, res) => {
  res.send('hello, world!');
});

const app = NestFactory.create(ApplicationModule, instance);
app.listen(3000);
