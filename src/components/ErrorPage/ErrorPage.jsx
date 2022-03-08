import React from 'react';
import { Container } from 'react-bootstrap';

export const ErrorPage = () => {
    return (
        <Container style={{marginTop: '4em', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
            <h5 style={{textAlign: 'center', fontStyle: 'italic'}}>There is no such page. Sorry</h5>
        </Container>
    )
};