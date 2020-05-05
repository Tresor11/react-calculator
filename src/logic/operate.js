/* eslint-disable import/extensions */
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const first = Big(numberOne);
  const second = Big(numberTwo);
  let total = 0;
  switch (operation) {
    case '-':
      total = first.minus(second);
      break;
    case 'x':
      total = first.times(second);
      break;
    case '%':
      total = first / 100;
      break;
    case '÷':
      total = first.div(second);
      break;
    default:
      total = first.plus(second);
  }
  return total.toString();
};

export default operate;
