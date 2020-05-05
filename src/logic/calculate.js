/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
import operate from './operate';

const calculate = (buttonName, calculatorData) => {
  let { total, next, operation } = calculatorData;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const oprations = ['+', '-', 'x', '%', '÷'];
  if (buttonName === '+/-') {
    total = parseFloat(total) * (-1).toString();
  } else if (numbers.includes(buttonName)) {
    if (total === null || total === 'Infinity') {
      total = buttonName;
    } else if (buttonName === '.') {
      let arr = operation ? total.split(operation)[1] : total;
      if (count(buttonName, arr) < 1) {
        total += buttonName;
      }
    } else if (buttonName !== '0' || total !== '0') {
      total += buttonName;
    }
  } else if (oprations.includes(buttonName)) {
    if (buttonName !== '%') {
      next = next !== null ? operate(next, total.split(operation)[1], operation) : total;
      operation = buttonName;
      total += buttonName;
    } else {
      total /= 100;
    }
  } else if (buttonName === 'Ac') {
    total = null;
    next = null;
  } else {
    total = operate(next, total.split(operation)[1], operation);
    next = null;
    operation = null;
  }
  return { total, next, operation };
};

const count = (el, arr) => {
  let sum = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      sum += 1;
    }
  }
  return sum;
};

export default calculate;
