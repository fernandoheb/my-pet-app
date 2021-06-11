import React, { Component } from 'react';
import { Button,  Container, Form, Row } from 'react-bootstrap';
import PetServico from '../Services/PetServico';



class NovoPet extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            especie: "",
            raca: ""
        };
        
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeEspecieHandler = this.changeEspecieHandler.bind(this);
        this.changeRacaHandler = this.changeRacaHandler.bind(this);
        this.salvarPet = this.salvarPet.bind(this);
        this.cancelar = this.cancelar.bind(this);
        this.teste= this.teste.bind(this)


    }

    cancelar = (e) => {
        
        this.props.history.push("/Pets");

    }

     

    salvarPet = (e) => {               
        console.log("teste");
        let Pet = {
            nome: this.state.nome,
            especie: this.state.especie,
            raca: this.state.raca
        };
        console.log('Pet => ' + JSON.stringify(Pet));
        PetServico.createPet(Pet).then((res) => {
            alert(res.data);
            this.props.history.push("/Pets");

        });
    }


    changeNomeHandler = (event) => {
        this.setState({ nome: event.target.value });
    }
    changeEspecieHandler = (event) => {
        this.setState({ especie: event.target.value });
    }
    changeRacaHandler = (event) => {
        this.setState({ raca: event.target.value });
    }

    teste(){
        alert();
    }


    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <h1>Cadastro de Usuários</h1>
                </Row>
                <Form>
                    <Form.Group controlId="formNome">
                        <Form.Control type="text" placeholder="Nome" value={this.state.nome} onChange={this.changeNomeHandler} />
                        <Form.Text className="text-muted">
                            Digite o seu primeiro nome.
                                </Form.Text>

                    </Form.Group>

                    <Form.Group controlId="formEspecie">
                        <Form.Control type="text" placeholder="Especie" value={this.state.especie} onChange={this.changeEspecieHandler} />
                        <Form.Text className="text-muted">
                            Digite o seu especie.
                                </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formRaca">
                        <Form.Control type="raca" placeholder="seuraca@dominio.com" value={this.state.raca} onChange={this.changeRacaHandler} />
                        <Form.Text className="text-muted">
                            Digite o seu raca.
                                </Form.Text>
                    </Form.Group>
                    <Row className="float-right">                           
                            <Button variant="success" style={{margin:"10px 0px 10px 0px"}} className="btnSubmit" onClick={this.salvarPet}>
                                Inserir
                            </Button>                           
                            <Button variant="warning" style={{margin:"10px"}}  onClick={this.cancelar.bind(this)} >
                                Cancelar
                            </Button>
                    </Row>    
                   
                </Form>
            </Container>
        );
    }
}

export default NovoPet;