import React, { Component } from 'react';
import {  Nav, Navbar } from 'react-bootstrap';

class HeaderComponent extends Component {
    render() {
        return (
            
            <header>
                <Navbar bg="dark" variant="dark" expand="lg" >
                    <Navbar.Brand href="#">Controle de Pets </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Pets">Listar Pets</Nav.Link>
                        <Nav.Link href="/novo_Pet">Cadastrar</Nav.Link>
                    </Nav>                  
                </Navbar>
            </header>
            
        );
    }
}

export default HeaderComponent;