export const numberToDisplay = (number) => {
  /* 
  Positions for leds
  - 0 -
  1 - 2
  - 3 - 
  4 - 5
  - 6 - 
  */
  switch (number) {
    case 0:
      return [true, true, true, false, true, true, true];
    case 1:
      return [false, false, true, false, false, true, false];
    case 2:
      return [true, false, true, true, true, false, true];
    case 3:
      return [true, false, true, true, false, true, true];
    case 4:
      return [false, true, true, true, false, true, false];
    case 5:
      return [true, true, false, true, false, true, true];
    case 6:
      return [true, true, false, true, true, true, true];
    case 7:
      return [true, false, true, false, false, true, false];
    case 8:
      return [true, true, true, true, true, true, true];
    case 9:
      return [true, true, true, true, false, true, true];
    default:
      break;
  }
};
