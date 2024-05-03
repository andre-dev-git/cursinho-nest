import { Module } from '@nestjs/common'
import { PautasModule } from './pautas/pautas.module';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';


@Module({
	imports: [PautasModule],
	controllers: [],
	providers: [
		{
		provide: APP_PIPE,
		useClass: ValidationPipe,
		},
	]
})
export class AppModule {}
