"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleService = void 0;
const common_1 = require("@nestjs/common");
let PeopleService = class PeopleService {
    constructor() {
        this.people = [
            {
                id: 10,
                name: 'Andrezinho do Nest',
            },
            {
                id: 20,
                name: 'Maria Silva',
            },
            {
                id: 30,
                name: 'João Santos',
            },
            {
                id: 40,
                name: 'Ana Oliveira',
            },
            {
                id: 50,
                name: 'Pedro Pereira',
            },
            {
                id: 60,
                name: 'Carla Rodrigues',
            },
            {
                id: 70,
                name: 'Ricardo Fernandes',
            },
            {
                id: 80,
                name: 'Mariana Costa',
            },
            {
                id: 90,
                name: 'Luís Gonçalves',
            },
            {
                id: 100,
                name: 'Sofia Martins',
            },
            {
                id: 110,
                name: 'Eduardo Sousa',
            },
            {
                id: 120,
                name: 'Patrícia Mendes',
            },
            {
                id: 130,
                name: 'Rui Almeida',
            },
            {
                id: 140,
                name: 'Catarina Ramos',
            },
            {
                id: 150,
                name: 'Fernando Costa',
            },
            {
                id: 160,
                name: 'Lara Pereira',
            },
            {
                id: 170,
                name: 'Gustavo Oliveira',
            },
            {
                id: 180,
                name: 'Inês Martins',
            },
            {
                id: 190,
                name: 'Tiago Sousa',
            },
            {
                id: 200,
                name: 'Marta Ferreira',
            },
            {
                id: 210,
                name: 'Hugo Santos',
            },
            {
                id: 220,
                name: 'Sara Mendes',
            },
            {
                id: 230,
                name: 'Carlos Silva',
            },
            {
                id: 240,
                name: 'Teresa Rodrigues',
            },
            {
                id: 250,
                name: 'Daniel Pereira',
            },
            {
                id: 260,
                name: 'Andreia Costa',
            },
            {
                id: 270,
                name: 'Bruno Martins',
            },
            {
                id: 280,
                name: 'Isabel Fernandes',
            },
            {
                id: 290,
                name: 'Paulo Gonçalves',
            },
            {
                id: 300,
                name: 'Liliana Santos',
            },
        ];
    }
    list() {
        return this.people;
    }
    findById(id) {
        for (const person of this.people) {
            if (person.id == id) {
                return person;
            }
        }
        return null;
    }
    save(person) {
        this.people.push(person);
    }
    update(person) {
        for (const personSearch of this.people) {
            if (personSearch.id == person.id) {
                personSearch.name = person.name;
                return true;
            }
        }
    }
};
exports.PeopleService = PeopleService;
exports.PeopleService = PeopleService = __decorate([
    (0, common_1.Injectable)()
], PeopleService);
//# sourceMappingURL=people.service.js.map