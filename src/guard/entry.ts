import { MyRequirement } from "./myRequirement";
import { Requirement } from './requirement';
import { RequirementAll } from './requirementAll';
import { RequirementAny } from './requirementAny';
import RequirementNot from './requirementNot';

const AdminRequirement = new MyRequirement('admin');

const GuestRequirement = new MyRequirement('guest')

const SuperChargeRequirement = new MyRequirement('super')

const DefineRole = (role: string) => {
    return new MyRequirement(role)
}

const all = (...requirements: Requirement[]) => {
    // @ts-ignore
    return new RequirementAll(...requirements)
}

const any = (...requirements: Requirement[]) => {
    // @ts-ignore
    return new RequirementAny(...requirements)
}

const not = (requirement: Requirement) => {
    return new RequirementNot(requirement);
}
export {
    AdminRequirement,
    GuestRequirement,
    SuperChargeRequirement,
    DefineRole,
    all,
    any,
    not
};