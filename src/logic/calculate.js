/* eslint-disable prefer-const */
import operate from './operate';

const calculate = (buttonName, calculatorData) => {
  let { total, next, operation } = calculatorData;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const oprations = ['+', '-', 'x', '%', '÷'];
  if (buttonName === '+/-') {
    total = parseFloat(total) * (-1).toString();
  } else if (numbers.includes(buttonName)) {
    if (total == null) {
      total = buttonName;
    } else {
      total += buttonName;
    }
  } else if (oprations.includes(buttonName)) {
    total = operate(total, next, buttonName);
  } else {
    console.log('default');
    total += 2;
    next += 1;
  }
  return { total, next, operation };
};

export default calculate;
