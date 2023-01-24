import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

import {
    ArrowPathIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

import React, { Component } from 'react';

const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorArrowRaysIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: Squares2X2Icon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: ArrowPathIcon,
    },
]
const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: LifebuoyIcon,
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkSquareIcon,
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
]



export class TopBar extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            comments: []
        };
    }

    render() {
        return (

            <Popover className="relative bg-secondry">
                <div className="mx-auto max-w-7xl px-2">
                    <div className="flex items-center justify-between py-2 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <button className="pr-4"><img src='images/menu.svg' /></button>
                            <a href="#">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="images/logo.svg"
                                    alt=""
                                />
                            </a>
                        </div>

                        <div className="hidden space-x-10 md:flex">
                            Valentine’s Day Offers! Buy Two Get One Free Shop Now
                        </div>
                        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                            <a href="#" className="whitespace-nowrap text-base font-medium text-black hover:text-gray-900">
                                <img className="inline pr-3" src="images/contact.svg" />Contact Us
                            </a>
                            <a href="#" className="whitespace-nowrap text-base font-medium text-black hover:text-gray-900 pl-4">
                                <img className="inline pr-3" src="images/cart.svg" />Track Order
                            </a>
                            <a href="#" className="whitespace-nowrap text-base font-medium text-black hover:text-gray-900 pl-4">
                                <img className="inline pr-3" src="images/location.svg" />Find Store
                            </a>
                        </div>
                    </div>
                </div>


            </Popover>

        )
    }
}