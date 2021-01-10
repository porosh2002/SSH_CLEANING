import React from 'react'
import ServiceCard from './ServiceCard'
import SwiperCore, { Autoplay,Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Autoplay,Navigation]);
function Services() {
    const Scroll = () => {
        if (window.innerWidth > 900) {
            return 4;
        }
        else {
            return 2;
        }
    };
    return (
        <div className='Services'>
            <p className='Section_Title'>Our Services</p>
            <Swiper
            navigation
                spaceBetween={200}
                centeredSlides={true}
                slidesPerView={Scroll()}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction:true
                }}
            >
                <SwiperSlide>
                    <ServiceCard ServiceClass='ServiceCard Service_1' name={'Air Hygiene & Ductwork  Cleaning'} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard ServiceClass='ServiceCard Service_2' name={'Builders And Handover Cleans'} />
                </SwiperSlide>

                <SwiperSlide>
                    <ServiceCard ServiceClass='ServiceCard Service_3' name={'Builders And Handover Cleans'} />
                </SwiperSlide>

                <SwiperSlide>
                    <ServiceCard ServiceClass='ServiceCard Service_4' name={'Builders And Handover Cleans'} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard ServiceClass='ServiceCard Service_5' name={'Builders And Handover Cleans'} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard ServiceClass='ServiceCard Service_6' name={'Builders And Handover Cleans'} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard ServiceClass='ServiceCard Service_7' name={'Builders And Handover Cleans'} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard ServiceClass='ServiceCard Service_8' name={'Builders And Handover Cleans'} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard ServiceClass='ServiceCard Service_9' name={'Builders And Handover Cleans'} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard ServiceClass='ServiceCard Service_10' name={'Builders And Handover Cleans'} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard ServiceClass='ServiceCard Service_11' name={'Builders And Handover Cleans'} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard ServiceClass='ServiceCard Service_12' name={'Builders And Handover Cleans'} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard ServiceClass='ServiceCard Service_13' name={'Builders And Handover Cleans'} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard ServiceClass='ServiceCard Service_14' name={'Builders And Handover Cleans'} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard ServiceClass='ServiceCard Service_15' name={'Builders And Handover Cleans'} />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
export default Services
