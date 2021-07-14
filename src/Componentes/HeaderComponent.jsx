import React, { Component } from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';

class HeaderComponent extends Component {
    render() {
        return (
            
            <>
                <Navbar bg="dark" variant="dark" expand="sm" >
                    <Container>
                    <Navbar.Brand href="/">Controle de Pets </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Pets">Listar Pets</Nav.Link>
                        <Nav.Link href="/novo_Pet">Cadastrar</Nav.Link>
                    </Nav>  
                    </Navbar.Collapse>   
                    </Container>             
                </Navbar>
            </>
            
        );
    }
}

export default HeaderComponent;