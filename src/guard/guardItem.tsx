import React from 'react';
import { Requirement } from './requirement';

interface IGuardItemProps {
    requirement: Requirement
}

const { Consumer, Provider } = React.createContext('');

const GuardItem: React.FC<IGuardItemProps> = (props) => {
    const { requirement } = props
    if (!(requirement instanceof Requirement)) {
        throw new TypeError("requirement is expected to be Requirement instance");
    }

    return (
        <Consumer>
            {(credentials: string) => {
                return requirement.satisfied(credentials)
                    ? props.children
                    : null;
            }}
        </Consumer>
    )
}

export { GuardItem, Provider };