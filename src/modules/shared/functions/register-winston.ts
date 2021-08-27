import { DynamicModule } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';

/* eslint-disable @typescript-eslint/no-var-requires */
const winston = require('winston');
winston.transports.DailyRotateFile = require('winston-daily-rotate-file');
const fs = require('fs');
const logDir = 'log';
/* eslint-enable @typescript-eslint/no-var-requires */

if (!fs.existsSync(logDir)) {
	fs.mkdirSync(logDir);
}

const dailyRotateFileTransport = new winston.transports.DailyRotateFile({
	datePattern: 'YYYY-MM-DD',
	filename: `${logDir}/docker-ts-nest-%DATE%.log`,
	maxFiles: '7d'
});

export function registerWinston(): DynamicModule {
	return WinstonModule.forRootAsync({
		inject: [],
		useFactory: () => ({
			format: winston.format.combine(
				winston.format.timestamp({
					format: 'MM/DD/YYYY HH:mm:ss.SSS'
				}),
				winston.format.json(),
				winston.format.splat()
			),
			level: 'info',
			transports: [new winston.transports.Console({ level: 'debug' }), dailyRotateFileTransport],
			exitOnError: false
		})
	});
}
