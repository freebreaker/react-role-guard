import React from 'react';
import { GuardItem } from './guardItem';
import { Requirement } from './requirement';

export const GuardFactory: React.FC<{ requirement: Requirement }> = props => {
    if (!(props.requirement instanceof Requirement)) {
        throw new TypeError('requirement expected to be Requirement instanceP')
    }

    return <GuardItem requirement={props.requirement}> {props.children} </GuardItem>
}