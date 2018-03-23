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
            <CardPanel className='left'>
                <div >
                    <label className='center' ><h3>{item.enunciado}</h3></label>
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
            </div>
        )
    }
}
export default ListaPerguntas