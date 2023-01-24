import React, { Component } from 'react';
import { TopBar } from './TopBar';
import { MidHeader } from './MidHeader';
import { Menu } from './Menu';
import { Cart } from '../Cart/Cart';




export class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <header>
                <TopBar ></TopBar>
                <MidHeader openCart={this.props.openCart} closeCart={this.props.closeCart} products={this.props.products} cartItems={this.props.cartItems} total={this.props.total}></MidHeader>
                <Menu></Menu>
                <Cart subTotal={this.props.subTotal} removeFromCart={this.props.removeFromCart} open={this.props.open} closeCart={this.props.closeCart} cartItems={this.props.cartItems} products={this.props.products} />
            </header>
        )
    }
}