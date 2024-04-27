import { HelloService } from './hello.service';
export declare class HelloController {
    private service;
    constructor(service: HelloService);
    hello(): string;
}
