export class Requirement {
    constructor() {
        this.satisfied = this.satisfied.bind(this);
    }

    public satisfied(_credentials: any): boolean {
        throw new TypeError('requirement satisfied must be overrided')
    }

}