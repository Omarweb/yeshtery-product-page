import React, { Component } from 'react';

import './App.css';
import 'swiper/css';
import { Header } from './components/Header/Header';

import { SingleProduct } from './components/Proudct/SingleProduct';

class App extends Component {
  constructor(props) {

    super(props)

    this.state = {
      cartState: {
        cartItems: [],
        total: 0,
        open: false,
        subTotal: 0
      },
      product: {
        id: 1,
        title: 'Fall Limited Edition Sneakers',
        cat: 'Men',
        price: 125.00,
        salePrice: 250.00,
        sizes: ['Small', 'Medium', 'Large', 'X Large', 'XX Large'],
        colors: [{
          name: 'Green',
          image: 'images/product/Group 331@2x.png'
        },
        {
          name: 'Black',
          image: 'images/product/Group 331@2x.png'
        }],
        previewImage: 'images/product/myt-woven-pants-black-gv3280.jpg',
        thumbnails: ['images/product/1.jpg', 'images/product/2.jpg', 'images/product/3.jpg', 'images/product/4.jpg']


      },
      products: [
        {
          id: 1,
          title: 'Fall Limited Edition Sneakers',
          cat: 'Men',
          price: 125.00,
          salePrice: 250.00,
          sizes: ['Small', 'Medium', 'Large', 'X Large', 'XX Large'],
          colors: [{
            name: 'Green',
            image: 'images/product/Group 331@2x.png'
          },
          {
            name: 'Black',
            image: 'images/product/Group 331@2x.png'
          }],
          previewImage: 'images/product/myt-woven-pants-black-gv3280.jpg',
          thumbnails: ['images/product/product1.png', 'images/product/product2.png', 'images/product/product3.png', 'images/product/product1.png']


        },
        {
          id: 2,
          title: 'Fall Limited Edition Sneakers',
          cat: 'Men',
          price: 125.00,
          salePrice: 250.00,
          sizes: ['Small', 'Medium', 'Large', 'X Large', 'XX Large'],
          colors: [{
            name: 'Green',
            image: 'images/product/Group 331@2x.png'
          },
          {
            name: 'black',
            image: 'images/product/Group 331@2x.png'
          }],
          previewImage: 'images/product/myt-woven-pants-black-gv3280.jpg',
          thumbnails: ['images/product/product1.png', 'images/product/product2.png', 'images/product/product3.png', 'images/product/product1.png']


        }
      ]
    };

  }
  openCart = () => {
    this.setState((prevState) => {
      return {
        cartState: {
          cartItems: [...prevState.cartState.cartItems],
          total: prevState.cartState.total,
          open: true,
          subTotal: prevState.cartState.subTotal,
        }
      }
    });
  }
  closeCart = () => {
    this.setState((prevState) => {
      return {
        cartState: {
          cartItems: [...prevState.cartState.cartItems],
          total: prevState.cartState.total,
          open: false,
          subTotal: prevState.cartState.subTotal,
        }
      }
    });
  }

  increaseItemQuantity = (id, quantity, color, size, price) => {

    if (this.state.cartState.cartItems.find(item => item.id === id && item.color === color && item.size === size) == null) {
      // console.log("STATE: ", this.state)
      // console.log("id : ", id, quantity)
      this.setState((prevState) => {
        return {
          cartState: {
            cartItems: [...prevState.cartState.cartItems, { id, quantity, color, size }],
            total: prevState.cartState.total + quantity,
            open: prevState.cartState.open,
            subTotal: Number(prevState.cartState.subTotal) + Number(price * quantity),
          }
        }
      })
      console.log(price)
    } else {
      // console.log("STATE: ", this.state)
      this.setState((prevState) => {
        return {
          cartState: {
            cartItems: prevState.cartState.cartItems.map(item => {
              if (item.id === id && item.color === color && item.size === size) return { id: id, color, size, quantity: item.quantity + quantity }
              return item;
            }),
            total: prevState.cartState.total + quantity,
            open: prevState.cartState.open,
            subTotal: prevState.cartState.subTotal + (price * quantity),
          }
        }
      })
    }

    // console.log("STATE After: ", this.state)


  }

  removeFromCart = (id, quantity, color, size, price) => {
    this.setState((prevState) => {
      return {
        cartState: {
          cartItems: prevState.cartState.cartItems.filter(item => {
            if ((item.id !== id) || (item.color !== color) || (item.size !== size)) {
              return item;
            }
          }),
          total: prevState.cartState.total - quantity,
          open: prevState.cartState.open,
          subTotal: prevState.cartState.subTotal - price * quantity,
        }
      }
    })

  }


  render() {

    return (
      <div className="App bg-white">

        <Header subTotal={this.state.cartState.subTotal} removeFromCart={this.removeFromCart} open={this.state.cartState.open} openCart={this.openCart} closeCart={this.closeCart} cartItems={this.state.cartState.cartItems} total={this.state.cartState.total} products={this.state.products} />
        <SingleProduct product={this.state.product} increaseItemQuantity={this.increaseItemQuantity} />

      </div>
    );
  }
}

export default App;
