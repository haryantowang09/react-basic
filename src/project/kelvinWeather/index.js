import React from 'react';
import './index.css';

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const TempBox = (props) => {
  return (
    <div>
      <label htmlFor={props.type}>{capitalize(props.type)}</label>
      <input
        type="number"
        id={props.type}
        value={props.cvalue}
        name={props.type.toLowerCase()}
        autoFocus={(props.type === 'kelvin') ? true : false}
        disabled={(props.type !== 'kelvin') ? "disabled" : ""}
        onChange={(e) => props.onChange(e)}
      />
    </div>
  );
}

class WeatherConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      celcious: 0,
      fahrenheit: 0,
    }
  }

  handleChange (event) {
    let celcious = 0;
    if (event.target.value) {
      celcious = event.target.value - 273;
      
      this.setState({
        celcious: celcious,
        fahrenheit: Math.floor(celcious * (9/5) + 32),
      });
    }
  }

  render() {
    return (
      <section className="temp-section">
        <TempBox type="kelvin"　onChange={(e) => this.handleChange(e)} />
        <div style={{ 'transform': 'scaleX(3)' }}>&#8594;</div>
        <TempBox type="celcius" cvalue={this.state.celcious} />
        <TempBox type="fahrenheit" cvalue={this.state.fahrenheit} />
      </section>
    );
  }
}

export default WeatherConverter;
