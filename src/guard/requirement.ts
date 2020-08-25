export class Requirement {
    requirements: Requirement[];
    constructor(...requirements: Requirement[]) {
        this.requirements = requirements
        if (new.target === Requirement) {
            throw new TypeError(
                "Cannot construct Requirement instances directly"
            );
        }
        // if (requirements.length === 0) {
        //     throw new Error("No Requirement has been provided");
        // }
        if (requirements.some(r => !(r instanceof Requirement))) {
            throw new Error(
                "Requirements are expected to be instances of 'Requirement'"
            );
        }
    }

    public satisfied(_credentials: string): boolean {
        throw new TypeError('requirement satisfied must be overrided')
    }

}