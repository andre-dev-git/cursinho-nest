import { Controller, Get, Res, Body, Param, Post, Put, Delete } from '@nestjs/common'
import { Response } from 'express'
import { PeopleService } from './people.service'
import { Person } from './person'

@Controller("people")
export class PeopleController {
  constructor(private service: PeopleService) {}
  @Get("/list")
  list(@Res() response: Response) {
    const list = this.service.list();
    return response.status(200).send(list);
  }

  @Get(":id")
  getById(@Param("id") id: number, @Res() response: Response) {
    const person = this.service.findById(id);
    const [status, msg] = person ? [200, person] : [404, "Não existe"];
    return response.status(status).send(msg);
  }
  @Post()
  save(@Body() person: Person, @Res() response: Response) {
    this.service.save(person);
    return response.status(200).send("Ok");
  }
  @Put()
  update(@Body() person: Person, @Res() response: Response) {
    const [status, msg] = this.service.update(person)
      ? [200, "Ok"]
      : [404, "Não existe"];
    return response.status(status).send(msg);
  }
  @Delete(':id')
  delete(@Param("id") id: number, @Res() response: Response) {
    const [status, msg] = this.service.delete(id)
      ? [200, "Ok"]
      : [404, "Não existe"];
    return response.status(status).send(msg);
  }
}
