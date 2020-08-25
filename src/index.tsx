import * as React from 'react';
import { Provider } from './guard/guardItem';
import { GuardFactory } from './guard/guardFactory';
import {
  AdminRequirement,
  GuestRequirement,
  SuperChargeRequirement,
  DefineRole,
  all,
  any,
  not
} from './guard/entry';
// Delete me
const GuestOrAdmin = any(AdminRequirement, GuestRequirement)

export const Thing = () => {
  return (
    <Provider value='guest'>
      <GuardFactory requirement={GuestOrAdmin}>admin or guest</GuardFactory>
      <GuardFactory requirement={AdminRequirement}>only admin</GuardFactory>
      <GuardFactory requirement={GuestRequirement}>only guest</GuardFactory>
    </Provider>
  );
};

export {
  AdminRequirement,
  GuestRequirement,
  SuperChargeRequirement,
  DefineRole,
  all,
  any,
  not
};