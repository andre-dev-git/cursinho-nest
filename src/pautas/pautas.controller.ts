import { Body, Res, Post, Controller, ValidationPipe, UsePipes } from '@nestjs/common';
import { PautasService } from './pautas.service';
import { Response } from "express";
import { CriarPautaResource } from './pautas.resource';

@Controller("pautas")
export class PautasController {
    constructor(private readonly service: PautasService) {}

    @Post()
    @UsePipes(ValidationPipe)
    save(@Body() pauta: CriarPautaResource, @Res() response: Response) {
        return response.status(200).send(pauta);
    }
}
