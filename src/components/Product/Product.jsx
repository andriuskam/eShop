import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import data from "../Data/Data"
import { Link } from 'react-router-dom';

export const Product = ( {addToCart} ) => {
    return (
        <Container style={{marginTop:'4em', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {
                data.map((item, index) => (
                    <Card style={{maxWidth: '280px'}} className='m-2' key={ index }>
                        <Card.Header style={{textAlign:'center'}}>
                            <Link style={{textDecoration:'none'}} to='/product' state={ {from: item} }>
                                <Card.Title style={{color:'black'}}>{ item.name }</Card.Title>
                            </Link>
                        </Card.Header>
                        <Card.Img style={{padding:'1em', maxHeight: '150px', objectFit: 'contain'}} src={ item.imgUrl } />
                        <Card.Body >
                            <Card.Text style={{minHeight: '100px', fontStyle: 'italic', fontSize: '1em'}}>{ item.description }</Card.Text>
                            <Card.Text style={{textAlign: 'center', fontWeight: 'bold'}}>{ item.price }€</Card.Text>
                            <div className='d-grid'>
                                <Button variant="success" size='sm' onClick={ () => addToCart(item) }>Add To Cart</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))
            }
        </Container>
    );
};