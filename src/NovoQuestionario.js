import React, { Component } from 'react'
import { Input, CardPanel, Row, Col, Icon, Button } from 'react-materialize'
import { Redirect } from 'react-router-dom'

import api from './Api'

var axios = require('axios');
var enume = ['A)', 'B)', 'C)', 'D)', 'E)'];
var qtdAlternativas = 0;

class NovoQuestionario extends Component {
    constructor(props) {
        super(props)

        this.state = {
            alternativa: [],
            perguntas: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveQuestionario = this.saveQuestionario.bind(this)
    }


    saveQuestionario() {
        const newQuestionario = {
            enunciado: this.state.perguntas,
            alternativas: this.state.alternativa
        }
        api.saveQuestionario(newQuestionario)
            .then((res) => {
                console.log(res)
                this.setState({redirect: ''})
            })
    }

    createUI() {
        return this.state.alternativa.map((el, i) =>
            <div key={i} className='row'>
                <input
                    ref="enunciado"
                    type="text"
                    placeholder="Pergunta.." />
                <Input
                    value={el || ''}
                    icon={enume[i]}
                    onChange={this.handleChange.bind(this, i)}
                    s={6} label="Alternativa"
                    validate>
                </Input>

                <Button floating large className='red left' icon='close' type='button' value='remove' onClick={this.removeClick.bind(this, i)} />
            </div>
        )
    }

    handleChange(i, event) {
        let alternativa = [...this.state.alternativa];
        alternativa[i] = event.target.value;
        this.setState({ alternativa });
    }

    addClick() {
        qtdAlternativas++;
        if (qtdAlternativas < 6)
            this.setState(prevState => ({ alternativa: [...prevState.alternativa, ''] }))
    }

    removeClick(i) {
        let alternativa = [...this.state.alternativa];
        alternativa.splice(i, 1);
        this.setState({ alternativa });
        qtdAlternativas--
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.alternativa.join(', '));
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <h2>Fazer questionario</h2>
                <form onSubmit={this.handleSubmit}>
                    {this.createUI()}

                    <Button floating large className='red'
                        onClick={(qtdAlternativas <= 6) ? this.addClick.bind(this) : alert('Atingido o limite de alternativas!')}
                        waves='light'
                        icon='add'
                    />
                    { qtdAlternativas > 0 &&
                        <Button large className='red'
                            onClick={this.saveQuestionario}
                            waves='light'
                            icon='save'
                        />
                    }

                </form>
            </div>
        )
    }
}

export default NovoQuestionario