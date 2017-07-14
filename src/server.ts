import express = require('express');
import logger = require('morgan');

import {NestFactory} from '@nestjs/core';

import {ApplicationModule} from './modules/app.module';

const instance = express();
instance.use(logger('combined'));

const app = NestFactory.create(ApplicationModule, instance);
app.listen(3000);
