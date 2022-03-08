import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap';

export const ProductPage = () => {
    const location = useLocation();
    const { from } = location.state;

    return (
        <Container style={{marginTop:'4em', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Card style={{minWidth: '300px', padding: '0.6em'}} className='m-2' key={ from.id }>
                <div className='d-grid'>
                    <Link to="/" className="btn btn-warning">Back</Link> 
                </div>
                <Card.Body>
                    <Card.Title style={{textAlign:'center'}}>{ from.name }</Card.Title>
                    <Card.Img style={{padding:'1em', maxHeight: '300px', objectFit: 'contain'}} src={ from.imgUrl } />
                    <Card.Text style={{minHeight: '100px', fontStyle: 'italic', fontSize: '1em'}}>{ from.description }</Card.Text>
                    <Card.Text style={{textAlign: 'right', fontWeight: 'bold'}}>{ from.price }€ </Card.Text>
                </Card.Body>
                
            </Card>
        </Container>
    )
};