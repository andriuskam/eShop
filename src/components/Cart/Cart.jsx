import React, { useState, useReducer } from 'react';
import { Container, Table } from 'react-bootstrap';

export const Cart = (props) => {

    const getSum = () => {
        return props.product.reduce( (sum, { price, quantity } ) => sum + price * quantity, 0).toFixed(2)
    }

    if (props.product[0] != null) {
        return (
            <Container style={{marginTop: '4em'}}>
                <Table>
                    <thead>
                        <tr style={{display:'flex'}}>
                            <th style={{flex: '1'}}>#</th>
                            <th style={{flex: '4'}}>Product</th>
                            <th style={{flex: '3'}}></th>
                            <th style={{flex: '2'}}>Price</th>
                            <th style={{flex: '4'}}>Quantity</th>
                            <th style={{flex: '1'}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.product.map(item => { return (
                            <tr style={{display:'flex'}} key={ item.id }>
                                <td style={{flex: '1'}}>{ item.id }</td>
                                <td style={{flex: '4'}}>{ item.name }</td>
                                <td style={{flex: '3'}}><img style={{width: '100px'}} src={ item.imgUrl } /></td>
                                <td style={{flex: '2'}}>{ item.price }€</td>
                                <td style={{flex: '4'}}><button id={ item.id } onClick={ () => props.updatequantityminus(item) }> - </button>{ item.quantity }<button id={ item.id } onClick={ () => props.updatequantityplus(item) }> + </button></td>
                                <td style={{flex: '1'}}><button onClick={ () => props.handledeleate(item.id) }>x</button></td>
                            </tr>
                        )})}
                        <button onClick={ props.clearcart }>Clear Cart</button><br /><br />
                        <span>{getSum()}</span> <br />
                        <button>Pay</button>
                    </tbody>
                </Table>
            </Container>
        );
    } else {
        return (
            <Container style={{marginTop: '4em', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
                <h5 style={{textAlign: 'center', fontStyle: 'italic'}}>You have no products yet</h5>
            </Container>
        )
    }
};