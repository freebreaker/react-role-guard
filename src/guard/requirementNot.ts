import { Requirement } from './requirement';

export class RequirementNot extends Requirement {
    requirement: Requirement;
    constructor(requirement: Requirement) {
        super(...[requirement]);
        this.requirement = requirement;
    }

    satisfied(credentials: string) {
        return !this.requirement.satisfied(credentials);
    }
}

export default RequirementNot;
