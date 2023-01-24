import React, { Component } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { ProductDetails } from './ProductDetails';
import { Slider } from './Slider';
//import { SimilarProducts } from './SimilarProduct';
const SimilarProducts = React.lazy(() => import("./SimilarProduct"))




export class SingleProduct extends Component {

    render() {
        return (
            <>
                <Breadcrumbs />
                <main className='mx-auto max-w-7xl product-container lg:flex  lg:gap-x-12 xl:gap-x-7   lg:py-10 lg:m-auto lg:mt-2 lg:max-w-8xl px-6 lg:px-0'>


                    <div className="destop-preview lg:block lg:w-1/2">
                        <Slider previewImage={this.props.product.previewImage} thumbnails={this.props.product.thumbnails} />
                    </div>
                    <section className="product-details  text-left mx-auto  mt-5 sm:pt-10 lg:pt-0  pb-20 lg:pb-5 lg:pr-0 lg:pl-7 xl:ml-1">
                        <ProductDetails increaseItemQuantity={this.props.increaseItemQuantity} product={this.props.product} />
                    </section>

                </main>
                <React.Suspense fallback={<div>loading..</div>}>
                    <SimilarProducts />
                </React.Suspense>
            </>
        );
    }
}

