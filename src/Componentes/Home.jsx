import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'

class Home extends Component {
    render() {
        return (
            <Container>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Row className="justify-content-md-center">
                    
                        <Col xs={6}><Link to="/Pets"> Listar Pets </Link></Col>
                        <Col xs="auto"><Link to="/novo_Pet">Cadastrar novo pet </Link></Col>                        
                    
                </Row>
                </header>
                

            </Container>
        );
    }
}

export default Home;