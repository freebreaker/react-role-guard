import { Requirement } from './requirement';

export class RequirementAll extends Requirement {
    public satisfied(credentials: string): boolean {
        return this.requirements.every((r) => r.satisfied(credentials))
    }

}