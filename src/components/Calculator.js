import React from 'react';
import calculate from '../logic/calculate';
import Buttons from './buttons';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calcObj: {},
    };

    this.handleCalculate = this.handleCalculate.bind(this);
  }

  handleCalculate(calcObj, text) {
    this.setState({ calcObj: calculate(calcObj, text) });
  }

  render() {
    const { calcObj } = this.state;

    let calcDisplay = '0';
    if (
      Object.keys(calcObj).length === 0
      || (calcObj.total === null
        && calcObj.next === null
        && calcObj.operation === null)
    ) {
      calcDisplay = '0';
    } else {
      calcDisplay = calcObj.next != null ? calcObj.next : calcObj.total;
    }

    return (
      <div className="Calc-body">
        <div className="Calc-display">{calcDisplay}</div>
        <div className="Calc-btns">
          <div className="Grey-btns">
            <div className="Grey-btns1">
              <Buttons text="AC" onClick={this.handleCalculate} Obj={calcObj} />
              <Buttons
                text="+/-"
                onClick={this.handleCalculate}
                Obj={calcObj}
              />
              <Buttons text="%" onClick={this.handleCalculate} Obj={calcObj} />
              <Buttons text="7" onClick={this.handleCalculate} Obj={calcObj} />
              <Buttons text="8" onClick={this.handleCalculate} Obj={calcObj} />
              <Buttons text="9" onClick={this.handleCalculate} Obj={calcObj} />
              <Buttons text="4" onClick={this.handleCalculate} Obj={calcObj} />
              <Buttons text="5" onClick={this.handleCalculate} Obj={calcObj} />
              <Buttons text="6" onClick={this.handleCalculate} Obj={calcObj} />
              <Buttons text="1" onClick={this.handleCalculate} Obj={calcObj} />
              <Buttons text="2" onClick={this.handleCalculate} Obj={calcObj} />
              <Buttons text="3" onClick={this.handleCalculate} Obj={calcObj} />
            </div>
            <div className="Grey-btns2">
              <Buttons text="0" onClick={this.handleCalculate} Obj={calcObj} />
              <Buttons text="." onClick={this.handleCalculate} Obj={calcObj} />
            </div>
          </div>

          <div className="Orange-btns">
            <Buttons text="÷" onClick={this.handleCalculate} Obj={calcObj} />
            <Buttons text="x" onClick={this.handleCalculate} Obj={calcObj} />
            <Buttons text="-" onClick={this.handleCalculate} Obj={calcObj} />
            <Buttons text="+" onClick={this.handleCalculate} Obj={calcObj} />
            <Buttons text="=" onClick={this.handleCalculate} Obj={calcObj} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
