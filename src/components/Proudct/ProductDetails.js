import React, { Component } from 'react';






export class ProductDetails extends Component {
    constructor(props) {

        super(props)
        this.state = {
            quantity: 1,
            size: 'Medium',
            color: 'Black'
        }

    }

    addQuantity = () => {
        this.setState((prevState) => {
            return { quantity: prevState.quantity + 1 }
        });
    }
    minQuantity = () => {
        this.setState((prevState) => {
            if (prevState.quantity > 1)
                return { quantity: prevState.quantity - 1 }
        });
    }
    handleSize = (size) => {
        this.setState({ size: size });
    }

    handleColor = (color) => {
        this.setState({ color: color });
    }
    render() {
        return (<>
            <img alt='' src='images/adidas.svg' />
            <h3 className="product capitalize text-very-dark-blue font-bold text-3xl sm:text-4xl sm:leading-none pb-3 pt-3">
                {this.props.product.title}
            </h3>
            <h3 className='text-gray-500 text-bold capitalize font-bold mb-3'> {this.props.product.cat}</h3>
            <div className='rating flex justify-start'>
                <div className="flex items-center mb-5">
                    <svg aria-hidden="true" className="text-yellow-400 w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="text-yellow-400 w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="text-yellow-400 w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="text-yellow-400 w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="text-gray-300 w-7 h-7 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>
                <span className='font-bold px-5'>4.9 of 5</span>
                <span className='text-gray-500 font-bold'>22 Rates</span>
            </div>

            <div className="amount font-bold flex items-center justify-between lg:flex-col lg:items-start mb-6">
                <div className="discount-price items-center flex">
                    <div className="price text-3xl text-primary">${this.props.product.price}</div>
                    <div className="original-price text-grayish-blue line-through pl-5 text-gray-500">
                        ${this.props.product.salePrice}
                    </div>
                    <div className="discount text-black bg-secondry w-max px-3 py-2  mx-5 ">
                        30% Off
                    </div>
                </div>

            </div>

            <div className=' sizes-section'>
                <h3 className='text-2xl font-bold w-full mb-7'>Size</h3>
                <div className='sizes flex w-full'>
                    {this.props.product.sizes.map((size, index) =>
                        <button key={index} onClick={() => this.handleSize(size)} className={`${size === this.state.size ? 'bg-gray-200 text-black' : 'border-gray-500'} size border  rounded-full text-sm block justify-center items-center lg:h-20 lg:w-20 h-20 w-36 text-primary font-bold mx-3`}>
                            {size}
                        </button>
                    )}


                </div>
            </div>

            <div className='mt-5 colors-section'>
                <h3 className='text-2xl font-bold w-full mb-7'>Color</h3>
                <div className='sizes flex w-full'>
                    {this.props.product.colors.map((color, index) =>
                        <button key={index} onClick={() => this.handleColor(color.name)} className={`${color.name === this.state.color ? 'border-primary' : 'border-black-200'} overflow-hidden size border  rounded-full text-sm flex justify-center items-center h-20 w-20 text-primary font-bold mx-3`}>
                            <img src={color.image} alt={color.name} />
                        </button>
                    )}

                </div>
            </div>
            <div className=" lg:mt-8 w-full">
                <h3 className='text-2xl font-bold w-full mb-7'>Quantity</h3>
                <div className="bg-gray-200 quantity-container  bg-light-grayish-blue rounded-full h-14 mb-4 flex items-center justify-between px-6 lg:px-3 font-bold sm:mr-3 lg:mr-5 lg:w-2/3">
                    <button onClick={this.minQuantity} className="flex items-center justify-center h-10 w-16 rounded-full  text-black  leading-none font-bold    hover:opacity-60 bg-secondry">-</button>

                    <input className="bg-gray-200 quantity focus:outline-none text-dark-blue  font-bold flex text-center w-full" type="number" name="quantity" value={this.state.quantity} aria-label="quantity number" readOnly />

                    <button onClick={this.addQuantity} className="flex items-center justify-center h-10 w-16 rounded-full  text-black  leading-none font-bold   hover:opacity-60 bg-secondry">+</button>
                </div>


            </div>
            <button onClick={() => this.props.increaseItemQuantity(this.props.product.id, this.state.quantity, this.state.color, this.state.size, this.props.product.price)} className="cart w-1/2 h-14 bg-primary rounded-full  mb-2 shadow-orange-shadow shadow-2xl text-white flex items-center justify-center  hover:opacity-60">
                <i className='cursor-pointer text-white text-xl leading-0 pr-3'>
                    <ion-icon name='cart-outline'></ion-icon>
                </i>
                Add to cart
            </button>

        </>)
    }
}