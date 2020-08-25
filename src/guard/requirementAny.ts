import { Requirement } from './requirement';

export class RequirementAny extends Requirement {
    public satisfied(credentials: string): boolean {
        return this.requirements.some(r => r.satisfied(credentials));
    }

}