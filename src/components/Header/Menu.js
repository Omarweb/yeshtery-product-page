
import { Popover, Transition } from '@headlessui/react'
import { Dialog } from '@headlessui/react';
import {
    Bars3Icon,

    XMarkIcon,
} from '@heroicons/react/24/outline'

import React, { Component } from 'react';



export class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileMenuOpen: false
        }
    }

    setMobileMenuOpen = (value) => {
        this.setState({ mobileMenuOpen: value })
    }

    render() {
        return (

            <Popover className="relative bg-black">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex  justify-between  py-4 w-full items-center">


                        <Popover.Group as="nav" className="hidden space-x-10 md:flex justify-between w-full">

                            <a href="#" className="text-base font-medium text-white hover:text-gray">
                                Men
                            </a>
                            <a href="#" className="text-base font-medium text-white hover:text-gray">
                                Women
                            </a>
                            <a href="#" className="text-base font-medium text-white hover:text-gray">
                                Unisex
                            </a>
                            <a href="#" className="text-base font-medium text-white hover:text-gray">
                                Kids
                            </a>
                            <a href="#" className="text-base font-medium text-white hover:text-gray">
                                Best seller
                            </a>
                            <a href="#" className="text-base font-medium text-white hover:text-gray">
                                New Arrivals
                            </a>

                            <a href="#" className="text-base font-medium text-white hover:text-gray">
                                Offers
                            </a>
                        </Popover.Group>
                        <div className="flex flex-2 lg:hidden justify-end">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => this.setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
                <Dialog as="div" open={this.state.mobileMenuOpen} onClose={this.setMobileMenuOpen}>
                    <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                        <div className="flex h-9 items-center justify-between">
                            <div className="flex">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        className="h-8"
                                        src="images/logo.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="flex">
                                <button
                                    type="button"
                                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                    onClick={() => this.setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">

                                    <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                                        Men
                                    </a>
                                    <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                                        Women
                                    </a>
                                    <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                                        Unisex
                                    </a>
                                    <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                                        Kids
                                    </a>
                                    <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                                        Best seller
                                    </a>
                                    <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                                        New Arrivals
                                    </a>

                                    <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                                        Offers
                                    </a>
                                </div>

                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>

            </Popover>

        )
    }
}