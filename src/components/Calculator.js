/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './buttons';

const Calculator = () => {
  const [calcObj, setState] = useState({});

  const handleCalculate = (calcObj, text) => {
    setState(calculate(calcObj, text));
  };

  
};

export default Calculator;
