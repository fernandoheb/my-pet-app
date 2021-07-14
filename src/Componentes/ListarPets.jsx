import React, { Component } from 'react';
import PetServico from '../Services/PetServico';
import {  Button, Col, Container, Row, Table } from 'react-bootstrap';


class ListarPets extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Pets: []
        };


        this.updatePet = this.updatePet.bind(this);

        this.delPet = this.delPet.bind(this);

    }

    componentDidMount() {
        this.interval = setInterval(() => this.getPets(), 1000);
        
    }

    getPets() {
        PetServico.getPets().then((res) => {
            this.setState({ Pets: res.data });
            console.log(res.data);
        });
    }

    delPet(id) {
        alert(id);
        PetServico.delPets(id).then((res) => {
            alert(res.data);
            this.getPets();
        });
    }
    voltar(e) {
        this.props.history.push("/");
    }
    updatePet(id) {
        // this.props.history.push(`/atualiza_Pet/${id}`)
        this.props.history.push(`/Pet/${id}`)
    }
    cadastrar() {
        // this.props.history.push("/novo_Pet");
        this.props.history.push(`/Pet/_add`);
    }



    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <h1>Lista de Usuários</h1>
                </Row>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Especie</th>
                                <th>Raça</th>                                
                                <th> Ações </th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log(this.state.Pets)}
                            {
                                this.state.Pets.map(
                                    Pet =>
                                        <tr key={Pet.id} >
                                            <td>{Pet.nome}</td>
                                            <td>{Pet.especie}</td>
                                            <td>{Pet.raca}</td>                                           
                                            <td>
                                                <Button variant="dark" onClick={() => this.updatePet(Pet.id)}   > Editar </Button>
                                                <Button variant="danger" onClick={() => this.delPet(Pet.id)} > Apagar </Button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Row>
                <Row>
                    <Col md={2} >
                        <Button variant="link" onClick={this.voltar.bind(this)}>Voltar</Button>
                    </Col>

                    <Col md={{ span: 2, offset: 8 }}>
                        <Button variant="primary" onClick={this.cadastrar.bind(this)}>Novo Pet</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ListarPets;