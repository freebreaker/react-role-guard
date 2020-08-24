import * as React from 'react';
import { Provider } from './guard/guardItem';
import { GuardFactory } from './guard/guardFactory';
import { AdminRequirement } from './guard/entry';
// Delete me
export const Thing = () => {
  return (
    <Provider value='admisn'>
      <GuardFactory requirement={AdminRequirement}>admins</GuardFactory>
    </Provider>
  );
};
