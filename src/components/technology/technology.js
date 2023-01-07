import React, { Fragment } from "react";
import TechImg from '../../assets/images/tech_advance.png'
import TechImg2 from '../../assets/images/HTA-section-pic.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import "swiper/css/pagination";
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import { Navigation } from "swiper";
import "swiper/css/navigation";
import './technology.css'
 

const Technology = () => {

    return(
        <Fragment>

            <div className="technology_section">
                <div className="container">
                    <div className="technology_title">
                        <h2>Our Cutting-edge technology and Treatments </h2>
                        <p>Our advance technology makes Bone Marrow Transplant process easier, less invasive, and more authentic.</p>
                    </div>
                    <div className="technology_inner">
                        <Row>
                            <Col md={6}>
                                <div className="tech_img">
                                    <img width="100%" src={TechImg} alt="" />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="tech_slider">
                                <Swiper
                                    modules={[Autoplay, Navigation]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation={true}
                                    
                                    // autoplay={{
                                    //     delay: 2000,
                                    //     disableOnInteraction: false
                                    // }}
                                    // loop={true}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    >
                                    <SwiperSlide>
                                        <div className="slider_text">
                                            <h2>Trained Nursing Staffs</h2>
                                            <Row className=" tech_slider_inner align-items-center">
                                                <Col>
                                                    <img style={{ paddingLeft:"12px", borderRadius: '30px' }} width="100%" src={TechImg2} alt="" />
                                                </Col>
                                                <Col>
                                                    <p> 
                                                        Bone Marrow transplant required zero negligence as immune system of patients is suppressed. Our all centers have well-trained and highly educated and experienced to deal with BMT patients. 
                                                    </p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider_text">
                                            <h2>Dedicated Isolation Ward </h2>
                                            <Row className=" tech_slider_inner align-items-center">
                                                <Col>
                                                    <img style={{ paddingLeft:"12px", borderRadius: '30px' }} width="100%" src={TechImg2} alt="" />
                                                </Col>
                                                <Col>
                                                <p> 
                                                    All the hospitals tied-up with Marlin are well-equipped with seamless anti-infection technology and reliable monitoring systems that minimize the infection rate and ensure patients safety. 
                                                </p>
                                                </Col>
                                            </Row>
                                           
                                        </div>
                                    </SwiperSlide> 
                                </Swiper>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>


        </Fragment>
    )

}

export default Technology