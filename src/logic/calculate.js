/* eslint-disable prefer-const */
/* eslint-disable no-sequences */
import operate from './operate';

const calculate = (buttonName, calculatorData) => {
  let { total, next, operation } = calculatorData;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const oprations = ['+', '-', 'x', '%', '÷'];
  switch (buttonName) {
    case '+/-':
      total = parseFloat(total) * (-1).toString;
      break;
    case numbers.includes(buttonName):
      total += buttonName;
      break;
    case oprations.includes(buttonName):
      total = operate(total, next, operation);
      break;
    default:
      total = null;
      next = null;
  }
  return { total, next, operation };
};

export default calculate;
