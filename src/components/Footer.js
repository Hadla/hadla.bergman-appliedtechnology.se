import React from 'react';
import { Container, Row, Col } from 'react-bootstrap/';


function Footer() {
    return ( 
        <footer className="mt-5">
                <Container fluid={true}>
                    <Row className="border-top justify-content-between p-0">
                        <Col className="mt-2 p-0" md={3} sm={12}>Hadla Bergman</Col>
                        <Col className="mt-2 p-0 d-flex justify-content-end" md={3}>This site was made of Hadla Bergman</Col>
                    </Row>
                </Container>
        </footer>
    );
}

export default Footer;