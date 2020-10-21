import React, { Component } from 'react';
import Dado from './Dado';
import '../styles/TirarDados.css';

export default class TirarDados extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tirando: false,
      dado1: 'fas fa-dice-one',
      dado2: 'fas fa-dice-one',
    };
    this.obtenerDadosAlAzarYMostrarlos = this.obtenerDadosAlAzarYMostrarlos.bind(this);
  }

  static defaultProps = {
    dados: [
      { clase: 'fas fa-dice-one' },
      { clase: 'fas fa-dice-two' },
      { clase: 'fas fa-dice-three' },
      { clase: 'fas fa-dice-four' },
      { clase: 'fas fa-dice-five' },
      { clase: 'fas fa-dice-six' },
    ],
  };
  obtenerDadosAlAzarYMostrarlos() {
    const nuevoDado1 = this.props.dados[Math.floor(Math.random() * this.props.dados.length)];
    const nuevoDado2 = this.props.dados[Math.floor(Math.random() * this.props.dados.length)];
    this.setState({ dado1: nuevoDado1, dado2: nuevoDado2, tirando: true });
    setTimeout(() => {
      this.setState({ tirando: false });
    }, 1000);
  }
  render() {
    return (
      <div className="tirarDados">
        <div className="tirarDados-container">
          <Dado dado={this.state.dado1.clase || this.state.dado1} tirando={this.state.tirando} />
          <Dado dado={this.state.dado2.clase || this.state.dado1} tirando={this.state.tirando} />
        </div>
        <button onClick={this.obtenerDadosAlAzarYMostrarlos} disabled={this.state.tirando}>
          {this.state.tirando ? 'Tirando...' : 'Tira los dados!'}
        </button>
      </div>
    );
  }
}
