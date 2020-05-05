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
    } else {
      total += buttonName;
    }
  } else if (oprations.includes(buttonName)) {
    next = next !== null ? operate(next, total.split(operation)[1], operation) : total;
    operation = buttonName;
    total += buttonName;
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

export default calculate;
