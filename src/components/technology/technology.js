import React, { Fragment } from "react";
import TechImg from '../../assets/images/tech_advance.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import "swiper/css/pagination";
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import { Navigation } from "swiper";
import "swiper/css/navigation";

const Technology = () => {

    return(
        <Fragment>

            <div className="technology_section">
                <div className="container">
                    <div className="technology_title">
                        <h2>Our Technological Advancements</h2>
                        <p>The state-of-the-art technologies and advanced procedures at Max Hospitals help you recover faster
                        from liver transplant and get back home sooner.</p>
                    </div>
                    <div className="technology_inner">
                        <Row>
                            <Col md={6}>
                                <div className="tech_img">
                                    <img src={TechImg} alt="" />
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
                                            <h2>Da Vinci Xi Robot</h2>
                                            <p>operate through a few incisions by utilising a high resolution 3D vision system, which allows the surgeons to view anatomical structures in natural colours. The operative field can be observed through a video monitor and the Da Vinci Xi Robotic system manually controls the robotic arms which replicate the hand movement of the surgeon. Additionally, it features small wristed instruments that bend and rotate greater than the human hand providing a superior precision and control to the surgeon.
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider_text">
                                            <h2>Da Vinci Xi Robot</h2>
                                            <p>operate through a few incisions by utilising a high resolution 3D vision system, which allows the surgeons to view anatomical structures in natural colours. The operative field can be observed through a video monitor and the Da Vinci Xi Robotic system manually controls the robotic arms which replicate the hand movement of the surgeon. Additionally, it features small wristed instruments that bend and rotate greater than the human hand providing a superior precision and control to the surgeon.
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider_text">
                                            <h2>Da Vinci Xi Robot</h2>
                                            <p>operate through a few incisions by utilising a high resolution 3D vision system, which allows the surgeons to view anatomical structures in natural colours. The operative field can be observed through a video monitor and the Da Vinci Xi Robotic system manually controls the robotic arms which replicate the hand movement of the surgeon. Additionally, it features small wristed instruments that bend and rotate greater than the human hand providing a superior precision and control to the surgeon.
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider_text">
                                            <h2>Da Vinci Xi Robot</h2>
                                            <p>operate through a few incisions by utilising a high resolution 3D vision system, which allows the surgeons to view anatomical structures in natural colours. The operative field can be observed through a video monitor and the Da Vinci Xi Robotic system manually controls the robotic arms which replicate the hand movement of the surgeon. Additionally, it features small wristed instruments that bend and rotate greater than the human hand providing a superior precision and control to the surgeon.
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider_text">
                                            <h2>Da Vinci Xi Robot</h2>
                                            <p>operate through a few incisions by utilising a high resolution 3D vision system, which allows the surgeons to view anatomical structures in natural colours. The operative field can be observed through a video monitor and the Da Vinci Xi Robotic system manually controls the robotic arms which replicate the hand movement of the surgeon. Additionally, it features small wristed instruments that bend and rotate greater than the human hand providing a superior precision and control to the surgeon.
                                            </p>
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