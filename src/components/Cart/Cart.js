import React, { Component } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { CartItem } from './CartItem';
export class Cart extends Component {
    constructor(props) {
        super(props);


    }
    handelClose = () => {

    }

    render() {
        return (
            <Transition.Root show={this.props.open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={this.props.closeCart}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className=" h-full flex-col justify-start w-full overflow-y-scroll bg-white shadow-xl">
                                            <div className="flex-col flex-1 justify-start overflow-y-auto py-6 px-4 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-lg font-medium text-gray-900 w-full flex flex-1">Shopping cart</Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                            onClick={this.props.closeCart}
                                                        >
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="mt-8">
                                                    <div className="flow-root">
                                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                            {this.props.cartItems.length < 1
                                                                ?
                                                                <span className='p-6 block'>Cart is empty</span>
                                                                :
                                                                this.props.cartItems.map((item, index) =>
                                                                    <CartItem removeFromCart={this.props.removeFromCart} key={index} item={item} products={this.props.products} />
                                                                )

                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-4 flex-col flex-1 justify-start border-t border-gray-200 py-6 px-4 sm:px-6">
                                                <div className="flex justify-center text-xl font-bold text-black">
                                                    <p className='pr-2'>Total: </p>
                                                    <p>{this.props.subTotal}$</p>
                                                </div>

                                                <div className='flex justify-between'>
                                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">

                                                        <button
                                                            type="button"
                                                            className="flex items-center justify-center rounded-full border border-transparent bg-secondry px-14 py-3 text-black font-medium  shadow-sm hover:bg-black hover:text-white"
                                                            onClick={this.props.closeCart}
                                                        >
                                                            Review Cart

                                                        </button>

                                                    </div>
                                                    <div className="mt-6">
                                                        <a
                                                            href="#"
                                                            className="flex items-center justify-center rounded-full border border-transparent bg-indigo-600 px-14 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                        >
                                                            Checkout
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root >)
    }
}