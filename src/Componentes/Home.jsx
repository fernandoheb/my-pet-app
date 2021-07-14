import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/pet_logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    render() {
        return (
            <Container>
                <header className="App-header">
                    <figure class='Display-Logo'>
                    <img src={logo} className="logo" alt="logo" />
                    </figure>
                    <Row className="w-100 Justify-Content-Center ">
                       <Col className="CFlex">
                        <Button variant="success"  href="/Pets"> Listar Pets </Button>
                        <Button variant="warning" href="/novo_Pet">Novo pet </Button>                                           
                        </Col>              
                    </Row>
                </header>
            </Container>
        );
    }
}

export default Home;