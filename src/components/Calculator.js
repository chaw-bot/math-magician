/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './buttons';

const Calculator = () => {
  const [calcObj, setState] = useState({});

  const handleCalculate = (calcObj, text) => {
    setState(calculate(calcObj, text));
  };

  let calcDisplay = '0';
  if (
    Object.keys(calcObj).length === 0
      || (calcObj.total === null
        && calcObj.next === null
        && calcObj.operation === null)
  ) {
    calcDisplay = '0';
  } else {
    calcDisplay = calcObj.next != null ? calcObj.next
      : calcObj.next != null ? calcObj.total
        : calcObj.operation;
  }

  
};

export default Calculator;
