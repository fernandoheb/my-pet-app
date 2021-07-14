import React, { Component } from 'react';
import { Button,  Col,  Container, Form, Row } from 'react-bootstrap';
import PetServico from '../Services/PetServico';
import '../App.css';



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
       // console.log("teste");
        let Pet = {
            nome: this.state.nome,
            especie: this.state.especie,
            raca: this.state.raca
        };
        console.log('Pet => ' + JSON.stringify(Pet));
        PetServico.createPet(Pet).then((res) => {          
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
                <Row className="text-center">
                    <h1>Admissão dos Pets</h1>
                </Row>
                <Form>
                    <Form.Group controlId="formNome">
                        <Form.Control type="text" placeholder="Nome" value={this.state.nome} onChange={this.changeNomeHandler} />
                        <Form.Text className="text-muted">
                            Digite o nome do pet.
                                </Form.Text>

                    </Form.Group>

                    <Form.Group controlId="formEspecie">
                        <Form.Control type="text" placeholder="Especie" value={this.state.especie} onChange={this.changeEspecieHandler} />
                        <Form.Text className="text-muted">
                            Digite a espécie do pet.
                                </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formRaca">
                        <Form.Control type="text" placeholder="Raça" value={this.state.raca} onChange={this.changeRacaHandler} />
                        <Form.Text className="text-muted">
                            Digite a raça do pet.
                                </Form.Text>
                    </Form.Group>
                    <Row >  
                        <div className=" CFlexEnd">
                            <Button variant="success"  className="btnSubmit" onClick={this.salvarPet}>
                                Inserir
                            </Button>                           
                            <Button variant="warning"   onClick={this.cancelar.bind(this)} >
                                Cancelar
                            </Button>
                        </div>             
                    </Row>    
                   
                </Form>
            </Container>
        );
    }
}

export default NovoPet;