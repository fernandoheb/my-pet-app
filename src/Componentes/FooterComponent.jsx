import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';


class FooterComponent extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <footer>
                        <small> Desenvolvimento de Web Sites - IFSP 2021 </small>
                    </footer>
                </Row>
            </Container>
        );
    }
}

export default FooterComponent; 