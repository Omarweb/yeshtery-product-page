import React, { Component } from 'react';





export class Breadcrumbs extends Component {
    render() {
        return (
            <nav className="flex px-5 py-3  justify-start mx-auto max-w-7xl px-2" aria-label="Breadcrumb">

                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="#" className="underline  inline-flex items-center text-sm font-medium text-black hover:text-blue-600 dark:text-black dark:hover:text-gray">

                            Men
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            / <a href="#" className="underline  ml-1 text-sm font-medium text-black hover:text-blue-600 md:ml-2 dark:text-black dark:hover:text-gray">Clothing</a>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            / <a href="#" className="underline  ml-1 text-sm font-medium text-black hover:text-blue-600 md:ml-2 dark:text-black dark:hover:text-gray">Tops</a>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            / <a href="#" className="underline  ml-1 text-sm font-medium text-black hover:text-blue-600 md:ml-2 dark:text-black dark:hover:text-gray">Adidas</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            /<span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-black">Adidas Black T-Shirt</span>
                        </div>
                    </li>
                </ol>

            </nav>

        );
    }
}

