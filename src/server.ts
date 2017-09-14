import bodyParser = require('body-parser');
import {NestFactory} from '@nestjs/core';
import {ApplicationModule} from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(bodyParser.json());
  await app.listen(3000);
}

bootstrap();
