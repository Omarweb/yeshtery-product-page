
import { Fragment } from 'react'
import { Popover, Transition, Menu } from '@headlessui/react'



import React, { Component } from 'react';



export class MidHeader extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

            <Popover className="relative bg-white">
                <div className="mx-auto max-w-7xl px-2">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <div className="relative">
                                <img className="absolute text-gray-400 top-3 left-4" src='images/search.svg' />
                                <input type="text" placeholder='Search' className="placeholder-black bg-white h-12 w-full px-12 rounded-full focus:outline-none hover:cursor-pointer border border-grey" name="" />

                            </div>
                        </div>

                        <div className="hidden space-x-10 md:flex">
                            <img src='images/adidas.svg' />
                        </div>
                        <div className=" items-center justify-end md:flex md:flex-1 lg:w-0">


                            <button onClick={() => this.props.openCart()} className="whitespace-nowrap text-base font-medium text-black hover:text-gray-900 relative mr-3">


                                <div className='inline relative'>

                                    <span className="absolute right-0 top--3 rounded-full bg-secondry w-4 h-4 top right p-0 m-0 text-black font-mono text-sm  leading-tight text-center">
                                        {this.props.total}
                                    </span>
                                    <img className="inline pr-3" src="images/cartIcon.svg" />
                                </div>
                                Cart
                            </button>

                            <a href="#" className="hidden lg:block whitespace-nowrap text-base font-medium text-black hover:text-gray-900 relative mr-3">

                                <img className="inline pr-3" src="images/wishlist.svg" /> Wishlist
                            </a>
                            <a href="#" className="hidden lg:block whitespace-nowrap text-base font-medium text-black hover:text-gray-900 relative">

                                <img className="inline pr-3" src="images/login.svg" /> Login
                            </a>
                        </div>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pt-5 pb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt="Your Company"
                                        />
                                    </div>

                                </div>

                            </div>

                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>

        )
    }
}