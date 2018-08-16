// @flow strict

export const getToggleValue = (value: ?boolean, stateValue: boolean): boolean => {
  return typeof value === 'boolean' ? value : !stateValue;
};
