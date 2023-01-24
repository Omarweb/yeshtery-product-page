import React, { Component } from 'react';
import { Popover, Transition, Menu } from '@headlessui/react'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }

    }
    componentDidMount() {


        // Trigger update
        const product = this.props.products.filter((item) => { return item.id === this.props.item.id })
        this.setState({ product: product[0] });


    }

    render() {
        return (
            <li key={this.props.item.id} className="flex py-2 border border-gray-200 p-3 rounded-lg">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                        src={this.state.product.previewImage}
                        alt=''
                        className="h-full w-full object-cover object-center"
                    />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                <a href="#">{this.state.product.title}</a>
                            </h3>


                            <p className="ml-4">{this.state.product.price}$</p>
                        </div>

                    </div>
                    <div className='flex '>
                        <p className="mt-1 text-sm text-gray-500 pr-3 ">{this.props.item.color}</p>

                        <p className="mt-1 text-sm text-gray-500">{this.props.item.size}</p>
                    </div>
                    <div className="flex flex-1 items-center justify-between text-sm">

                        <p className="text-gray-500">Qty {this.props.item.quantity}</p>

                        <div className="flex">
                            <button onClick={() => this.props.removeFromCart(this.props.item.id, this.props.item.quantity, this.props.item.color, this.props.item.size, this.state.product.price)} className='flex items-center justify-center rounded-full border border-transparent bg-secondry px-5 py-2 text-black font-medium  shadow-sm hover:bg-red-800 hover:text-white'>Remove</button>
                        </div>
                    </div>
                </div>


            </li>

        );
    }
}

