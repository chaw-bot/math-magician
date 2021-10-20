import React from 'react';
import calculate from '../logic/calculator';
import operate from '../logic/operate';
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Calc-body">
        <div className="Calc-display">0</div>
        <div className="Calc-btns">
          <div className="Grey-btns">
            <div className="Grey-btns1">
              <div className="Calc-btn">AC</div>
              <div className="Calc-btn">+/-</div>
              <div className="Calc-btn">%</div>
              <div className="Calc-btn">7</div>
              <div className="Calc-btn">8</div>
              <div className="Calc-btn">9</div>
              <div className="Calc-btn">4</div>
              <div className="Calc-btn">5</div>
              <div className="Calc-btn">6</div>
              <div className="Calc-btn">1</div>
              <div className="Calc-btn">2</div>
              <div className="Calc-btn">3</div>
            </div>
            <div className="Grey-btns2">
              <div className="Calc-btn">0</div>
              <div className="Calc-btn">.</div>
            </div>
          </div>

          <div className="Orange-btns">
            <div className="Calc-btn">÷</div>
            <div className="Calc-btn">x</div>
            <div className="Calc-btn">-</div>
            <div className="Calc-btn">+</div>
            <div className="Calc-btn">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
