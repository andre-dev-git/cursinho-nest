import { Response } from 'express';
import { PeopleService } from './people.service';
import { Person } from './person';
export declare class PeopleController {
    private service;
    constructor(service: PeopleService);
    list(response: Response): Response<any, Record<string, any>>;
    getById(id: number, response: Response): Response<any, Record<string, any>>;
    save(person: Person, response: Response): Response<any, Record<string, any>>;
    update(person: Person, response: Response): Response<any, Record<string, any>>;
    delete(id: number, response: Response): Response<any, Record<string, any>>;
}
