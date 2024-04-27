import { Person } from './person';
export declare class PeopleService {
    people: Person[];
    list(): Person[];
    findById(id: number): Person;
    save(person: Person): void;
    update(person: Person): boolean;
    delete(personId: number): boolean;
}
