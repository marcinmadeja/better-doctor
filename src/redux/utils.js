export const getToggleValue = (value, stateValue) => {
  return typeof value === 'boolean' ? value : !stateValue;
};
