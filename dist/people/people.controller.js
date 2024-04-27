"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleController = void 0;
const common_1 = require("@nestjs/common");
const people_service_1 = require("./people.service");
const person_1 = require("./person");
let PeopleController = class PeopleController {
    constructor(service) {
        this.service = service;
    }
    list(response) {
        const list = this.service.list();
        return response.status(200).send(list);
    }
    getById(id, response) {
        const person = this.service.findById(id);
        const [status, msg] = person ? [200, person] : [404, "Não existe"];
        return response.status(status).send(msg);
    }
    save(person, response) {
        this.service.save(person);
        return response.status(200).send("Ok");
    }
    update(person, response) {
        const [status, msg] = this.service.update(person)
            ? [200, "Ok"]
            : [404, "Não existe"];
        return response.status(status).send(msg);
    }
    delete(id, response) {
        const [status, msg] = this.service.delete(id)
            ? [200, "Ok"]
            : [404, "Não existe"];
        return response.status(status).send(msg);
    }
};
exports.PeopleController = PeopleController;
__decorate([
    (0, common_1.Get)("/list"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PeopleController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], PeopleController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [person_1.Person, Object]),
    __metadata("design:returntype", void 0)
], PeopleController.prototype, "save", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [person_1.Person, Object]),
    __metadata("design:returntype", void 0)
], PeopleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], PeopleController.prototype, "delete", null);
exports.PeopleController = PeopleController = __decorate([
    (0, common_1.Controller)("people"),
    __metadata("design:paramtypes", [people_service_1.PeopleService])
], PeopleController);
//# sourceMappingURL=people.controller.js.map