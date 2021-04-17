import { HelmetMiddleware } from '@nest-middlewares/helmet';
import { ResponseTimeMiddleware } from '@nest-middlewares/response-time';
import { Module } from '@nestjs/common';
import { IHelmetConfiguration } from 'helmet';
import { ResponseTimeOptions } from 'response-time';

@Module({
	/* eslint-disable-next-line @typescript-eslint/no-use-before-define */
	exports: [SharedModule]
})
export class SharedModule {
	public configure(): void {
		HelmetMiddleware.configure(this.getHelmetConfiguration());
		ResponseTimeMiddleware.configure(this.getResponseTimeOptions());
	}

	/* eslint-disable radar/no-identical-functions */
	private getHelmetConfiguration(): IHelmetConfiguration {
		return {
			// default helmet configuration
		};
	}

	private getResponseTimeOptions(): ResponseTimeOptions {
		return {
			// default response-time options
		};
	}
	/* eslint-enable radar/no-identical-functions */
}
