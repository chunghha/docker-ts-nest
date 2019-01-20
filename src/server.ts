import { FastifyAdapter, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { ApplicationModule } from './modules/app.module';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule, new FastifyAdapter());

	const options = new DocumentBuilder()
		.setTitle('Hello example')
		.setDescription('The hello API description')
		.setVersion('1.0')
		.addTag('hello')
		.addBearerAuth()
		.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('/docs', app, document);

	await app.listen(3000);
}

bootstrap();
