import { Injectable } from '@nestjs/common'
import { Person } from './person'

@Injectable()
export class PeopleService {
  people: Person[] = [
    {
      id: 10,
      name: "Andrezinho do Nest",
    },
    {
      id: 20,
      name: "Maria Silva",
    },
    {
      id: 30,
      name: "João Santos",
    },
    {
      id: 40,
      name: "Ana Oliveira",
    },
    {
      id: 50,
      name: "Pedro Pereira",
    },
    {
      id: 60,
      name: "Carla Rodrigues",
    },
    {
      id: 70,
      name: "Ricardo Fernandes",
    },
    {
      id: 80,
      name: "Mariana Costa",
    },
    {
      id: 90,
      name: "Luís Gonçalves",
    },
    {
      id: 100,
      name: "Sofia Martins",
    },
    {
      id: 110,
      name: "Eduardo Sousa",
    },
    {
      id: 120,
      name: "Patrícia Mendes",
    },
    {
      id: 130,
      name: "Rui Almeida",
    },
    {
      id: 140,
      name: "Catarina Ramos",
    },
    {
      id: 150,
      name: "Fernando Costa",
    },
    {
      id: 160,
      name: "Lara Pereira",
    },
    {
      id: 170,
      name: "Gustavo Oliveira",
    },
    {
      id: 180,
      name: "Inês Martins",
    },
    {
      id: 190,
      name: "Tiago Sousa",
    },
    {
      id: 200,
      name: "Marta Ferreira",
    },
    {
      id: 210,
      name: "Hugo Santos",
    },
    {
      id: 220,
      name: "Sara Mendes",
    },
    {
      id: 230,
      name: "Carlos Silva",
    },
    {
      id: 240,
      name: "Teresa Rodrigues",
    },
    {
      id: 250,
      name: "Daniel Pereira",
    },
    {
      id: 260,
      name: "Andreia Costa",
    },
    {
      id: 270,
      name: "Bruno Martins",
    },
    {
      id: 280,
      name: "Isabel Fernandes",
    },
    {
      id: 290,
      name: "Paulo Gonçalves",
    },
    {
      id: 300,
      name: "Liliana Santos",
    },
  ];

  list(): Person[] {
    return this.people;
  }

  findById(id: number): Person {
	for (const person of this.people) {
      	if (person.id == id) {
        	return person;
      	}
    }
    return null;
  }

  save(person: Person): void {
    this.people.push(person);
  }

  update(person: Person): boolean {
    for (const personSearch of this.people) {
      if (personSearch.id == person.id) {
        personSearch.name = person.name;
        return true;
      }
    }
    return false;
  }
  delete(personId: number) {
    for (let i = 0; i < this.people.length; i++) {
      if (this.people[i].id === personId) {
        this.people.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}
