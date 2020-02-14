import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { ApplicationModule } from './modules/app.module';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule, new ExpressAdapter());

	const options = new DocumentBuilder()
		.setTitle('Hello example')
		.setDescription('The hello API description')
		.setVersion('1.0')
		.addTag('hello')
		.addBearerAuth()
		.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('/swagger', app, document);

	const API_PORT = +process.env.API_PORT || 3000;
	await app.listen(API_PORT);
}

bootstrap();
