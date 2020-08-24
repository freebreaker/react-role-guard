import { Requirement } from './requirement';


export class MyRequirement extends Requirement {
    public credentials: string
    constructor(credentials: string) {
        super();
        this.credentials = credentials
    }
    public satisfied(credentials: string) {
        return this.credentials === credentials
    }
}