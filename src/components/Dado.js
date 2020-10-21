import React, { Component } from 'react';
import '../styles/Dado.css';

export default class Dado extends Component {
  render() {
    return (
      <div className="dado">
        <i className={`${this.props.dado} ${this.props.tirando && 'shaking'}`}></i>
      </div>
    );
  }
}
