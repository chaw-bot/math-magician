/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './buttons';

const Calculator = () => {
  const [calcObj, setState] = useState({ total: 0, next: null, operation: null });

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
      : calcObj.total != null ? calcObj.total
        : calcObj.operation;
  }

  return (
    <div className="calc-page">
      <div>
        <h2 className="title2">Let&apos;s do some math!</h2>
      </div>
      <div className="Calc-body">
        <div className="Calc-display">{calcDisplay}</div>
        <div className="Calc-btns">
          <div className="Grey-btns">
            <div className="Grey-btns1">
              <Buttons text="AC" onClick={handleCalculate} Obj={calcObj} />
              <Buttons text="+/-" onClick={handleCalculate} Obj={calcObj} />
              <Buttons text="%" onClick={handleCalculate} Obj={calcObj} />
              <Buttons text="7" onClick={handleCalculate} Obj={calcObj} />
              <Buttons text="8" onClick={handleCalculate} Obj={calcObj} />
              <Buttons text="9" onClick={handleCalculate} Obj={calcObj} />
              <Buttons text="4" onClick={handleCalculate} Obj={calcObj} />
              <Buttons text="5" onClick={handleCalculate} Obj={calcObj} />
              <Buttons text="6" onClick={handleCalculate} Obj={calcObj} />
              <Buttons text="1" onClick={handleCalculate} Obj={calcObj} />
              <Buttons text="2" onClick={handleCalculate} Obj={calcObj} />
              <Buttons text="3" onClick={handleCalculate} Obj={calcObj} />
            </div>
            <div className="Grey-btns2">
              <Buttons text="0" onClick={handleCalculate} Obj={calcObj} />
              <Buttons text="." onClick={handleCalculate} Obj={calcObj} />
            </div>
          </div>

          <div className="Orange-btns">
            <Buttons text="÷" onClick={handleCalculate} Obj={calcObj} />
            <Buttons text="x" onClick={handleCalculate} Obj={calcObj} />
            <Buttons text="-" onClick={handleCalculate} Obj={calcObj} />
            <Buttons text="+" onClick={handleCalculate} Obj={calcObj} />
            <Buttons text="=" onClick={handleCalculate} Obj={calcObj} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
