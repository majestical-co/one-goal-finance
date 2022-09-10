export function exhaustiveCheck(value: never) {
  // this is used to ensure all switch cases return a value.
  // if we add a new value type that the switch should account for, typescript will tell us where the case needs to be added
  return value;
}