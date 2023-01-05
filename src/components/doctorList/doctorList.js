import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';

const DoctorList = () => {

    return (
        <Fragment>
            <div className="doctor_section" style={{ marginBottom: "100px", marginTop: "100px" }}>
                <div className="container-fluid">
                    <div className="doctor_area">
                        <Row>
                            <Col>
                            <div className="doctor_title text-center">
                                <h2>Our Liver Transplant Specialists</h2>
                                <p>Max Healthcare is home to 120+ best liver doctors in India offering multi-disciplinary
                                and state-of-the-art services to their patients.</p>
                            </div>
                            </Col>
                        </Row>
                       
                        <div className="doctor_list_section">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={6}
                            pagination={{ clickable: true }}
                            // autoplay={{
                            //     delay: 2000,
                            //     disableOnInteraction: false
                            // }}
                            // loop={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 5</SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide>
                            <SwiperSlide>Slide 10</SwiperSlide>
                         </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default DoctorList