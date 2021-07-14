import React, { Component } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import PetServico from '../Services/PetServico';

class AtualizarPet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            nome: "",
            especie: "",
            raca: ""
        };
        
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeEspecieHandler = this.changeEspecieHandler.bind(this);
        this.changeRacaHandler = this.changeRacaHandler.bind(this);
        this.atualizaPet = this.atualizaPet.bind(this);
        this.cancelar = this.cancelar.bind(this);
        this.teste= this.teste.bind(this)


    }

    componentDidMount(){
        PetServico.getPetById(this.state.id).then( (res) => {
            let Pet = res.data;
            this.setState({nome:Pet.nome,
                especie: Pet.especie,
                raca: Pet.raca});
        });

    }



    cancelar = (e) => {
        
        this.props.history.push("/Pets");

    }

     

    atualizaPet = (e) => {               
        console.log("teste");
        let Pet = {
            id:this.state.id,
            nome: this.state.nome,
            especie: this.state.especie,
            raca: this.state.raca
        };
        console.log('Pet => ' + JSON.stringify(Pet));
        PetServico.updatePet(Pet).then((res) => {           
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
                            Digite o nome do pet.
                                </Form.Text>

                    </Form.Group>

                    <Form.Group controlId="formEspecie">
                        <Form.Control type="text" placeholder="Espécie" value={this.state.especie} onChange={this.changeEspecieHandler} />
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
                    <Row className="float-right">                           
                            <Button variant="success" style={{margin:"10px 0px 10px 0px"}} className="btnSubmit" onClick={this.atualizaPet}>
                                Atualizar
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

export default AtualizarPet;