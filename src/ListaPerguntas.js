import React, { Component } from 'react'
import { Input, CardPanel, Row, Col } from 'react-materialize'
import api from './Api'




class ListaPerguntas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            perguntas: []
        };
    }

    renderPerguntas(item) {
        return (
            <Row>
                <CardPanel className='right'>
                    <div >
                        <label><h5>{item.enunciado}</h5></label>
                        <form action="#" >
                            {item.alternativas.map((alternativa) => (
                                    <Input name='group1' type='radio' value={alternativa} label={alternativa} />
                                )
                            )}
                        </form>
                    </div>
                </CardPanel>
            </Row>
        )
    }

    componentDidMount() {
        api.loadPerguntas().then((res) => {
            this.setState({ perguntas: res.data })
        })
    }

    render() {
        return (
            <div className='container'>
                {this.state.perguntas.map(this.renderPerguntas)}
                <br />
                {console.log(this.state.perguntas)}
            </div>
        )
    }
}
export default ListaPerguntas