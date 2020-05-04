/* eslint-disable no-param-reassign */
/* eslint-disable no-sequences */
function calculate(name, data) {
  if (name === '+/-') {
    data.total *= -1;
    data.next *= -1;
  }
}
