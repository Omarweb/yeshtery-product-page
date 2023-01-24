import React, { Component } from 'react';
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


export class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thumbsSwiper: null
        }
    }

    setThumbsSwiper = (thumb) => {
        this.setState(
            { thumbsSwiper: thumb }
        );
    }
    render() {
        return (
            <>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: this.state.thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 flex flex-1"
                >
                    <SwiperSlide>
                        <img src={this.props.previewImage} alt='' />
                    </SwiperSlide>

                    {
                        this.props.thumbnails.map((thumb, index) =>
                            <SwiperSlide key={index}>
                                <img src={thumb} alt='' />
                            </SwiperSlide>
                        )
                    }



                </Swiper>
                <Swiper
                    onSwiper={this.setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper flex flex-1"
                >
                    <SwiperSlide>
                        <img src={this.props.previewImage} alt='' />
                    </SwiperSlide>
                    {
                        this.props.thumbnails.map((thumb, index) =>
                            <SwiperSlide key={index}>
                                <img src={thumb} alt='' />
                            </SwiperSlide>
                        )
                    }

                </Swiper>
            </>

        );
    }
}

