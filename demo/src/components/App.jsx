import React, { Component } from 'react';
import {
  Stickies
} from '../../../src/index';

export default class extends Component {

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      showTape: true,
      showOutput: false,
      showTitle: true,
      showFooter: true,
      output: '',
      colors: ['#FFFFFF'],
      showCustomColors: false,
      showBound: false
    };
    this.toggleValue = this.toggleValue.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  toggleValue(e) {
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    });
  }

  onChange(notes) {
    this.setState({
      output: JSON.stringify(notes, null, 2)
    });
  }

  render() {
    let wrapperStyle = {};
    let bounds = '';
    if (this.state.showBound) {
      wrapperStyle = {
        height: '500px',
        width: '500px',
        background: 'rgba(0, 0, 0, 0.2)',
        border: '2px solid #fff'
      };
      bounds = 'parent';
    }
    return (
      <div>
        <div className="header">
          React Stickies - Sticky Notes for React
        </div>
        <Stickies
          notes={this.state.notes}
          tape={this.state.showTape}
          style={{ float: 'left' }}
          colors={this.state.showCustomColors ? this.state.colors : undefined}
          title={this.state.showTitle}
          footer={this.state.showFooter}
          onChange={this.onChange}
          wrapperStyle={wrapperStyle}
          bounds={bounds}
        />
        <div className="config">
          <form>
            <input type="radio" name="showCustomColors" value="show_custom_colors" checked={this.state.showCustomColors} onClick={this.toggleValue} />Custom Colors
            <input type="radio" name="showTape" value="show_tape" checked={this.state.showTape} onClick={this.toggleValue} />Show Tape
            <input type="radio" name="showOutput" value="show_output" checked={this.state.showOutput} onClick={this.toggleValue} />Show Output
            <input type="radio" name="showTitle" value="show_title" checked={this.state.showTitle} onClick={this.toggleValue} />Show Title
            <input type="radio" name="showFooter" value="show_footer" checked={this.state.showFooter} onClick={this.toggleValue} />Show Footer
            <input type="radio" name="showBound" value="show_bound" checked={this.state.showBound} onClick={this.toggleValue} />Bound Drag
          </form>
          <div className="output" style={{ display: this.state.showOutput ? 'block' : 'none' }}>
            <label className="note-header">Output JSON</label>
            <div>
              <pre>
                {this.state.output}
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
