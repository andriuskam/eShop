import React, { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { Container, Navbar, Nav } from 'react-bootstrap'

import { Cart } from '../Cart/Cart'
import { Product } from '../Product/Product'
import { ErrorPage } from '../ErrorPage/ErrorPage'
import { ProductPage } from '../ProductPage/ProductPage'

export const ProductsList = () => {
    const [product, setProduct] = useState([]);

    const addToCart = (item) => {
        const newCart = [...product]
        let productInCart = newCart.find( (localval) => item.name === localval.name )
        if (productInCart === undefined && item.countInStock > 0) { 
            productInCart = {...item,quantity: 1}
            newCart.push(productInCart)
        } else if (productInCart != undefined && productInCart.countInStock > 0) {
            productInCart = {...item, quantity: productInCart.quantity++, countInStock: productInCart.countInStock -= 1 }
            console.log(productInCart)
        } else {
            window.alert("Out Of Stock")
        }
        setProduct(newCart);
    }

    const updateQuantityMinus = (item) => {
        const newCart = [...product]
        if (item.quantity != 1) {
            let productInCart = newCart.find( (localval) => item.name === localval.name )
            productInCart = {...item, quantity: productInCart.quantity -= 1, countInStock: productInCart.countInStock += 1 }
            setProduct(newCart)
        } else {
            if (window.confirm('Are You sure you want to remove ?')) {
                let productInCart = newCart.find( (localval) => item.name === localval.name )
                handleDeleate(productInCart.id)
            } else {
                console.log("false")
            }
        }
    }

    const updateQuantityPlus = (item) => {
        const newCart = [...product]
        if (item.countInStock !== 0) {
            let productInCart = newCart.find( (localval) => item.name === localval.name )
            productInCart = {...item, quantity: productInCart.quantity += 1, countInStock: productInCart.countInStock -= 1}
            setProduct(newCart)
        } else {
            window.alert("Out of Stock")
        }
    }

    const handleDeleate = (id) => {
        const newList = product.filter((item) => item.id !== id)
        console.log(newList)
        setProduct(newList);
    }

    const clearCart = () => setProduct([])

    return (
        <Router>
            <Navbar bg="dark" variant="dark" fixed="top" p="1">
                <Container>
                    <Navbar.Brand>
                        <Link style={{textDecorationLine:'none', margin:'.5em', color:'white', fontSize:"1.2em"}} to="/">eShop</Link>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            <Link style={{textDecorationLine:'none', margin:'.5em', color: 'lightgray'}} to="/">Main</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link style={{textDecorationLine:'none', margin:'.5em', color: 'lightgray'}} to="/cart">Cart</Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={ <Product addToCart={ addToCart } /> } />
                <Route path="/cart" element={ <Cart product={ product } updatequantityminus={ updateQuantityMinus } updatequantityplus={ updateQuantityPlus } handledeleate={ handleDeleate } clearcart={ clearCart } /> } />
                <Route path="/product" element={ <ProductPage product={product} /> } />
                <Route path="*" element={ <ErrorPage /> } />
            </Routes>
        </Router>
    )
};