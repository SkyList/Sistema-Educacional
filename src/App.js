import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import ListaPerguntas from './ListaPerguntas'
import NovoQuestionario from './NovoQuestionario'




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav >
            <div className="nav-wrapper">
              <a href="#" className="brand-logo center"><i class="material-icons">question_answer</i></a>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><Link to="/">Lista de questões</Link></li>
                <li><Link to="/new">Fazer questionario</Link></li>
              </ul>
            </div>
          </nav>
          <Route exact path='/' component={ListaPerguntas} />
          <Route exact path='/new' component={NovoQuestionario} />
        </div>
      </Router>
    );
  }
}

export default App;
