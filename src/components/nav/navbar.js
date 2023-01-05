import React, { Fragment } from "react";
import './navbar.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import hero_img from '../../assets/images/hero_img.png';

const Navbar = () => {

    return(
        <Fragment> 
          <div className="navbar_section">
            <div className="container">
                <div className="navbar_inner">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="phone">
                        <a href="tel:+91 87500 42481"> +91 87500 42481</a>
                    </div>
                </div>
                <div className="hero_section">
                    <div className="hero_section_inner">
                        <Row className="align-items-center">
                            <Col md={8} >
                                <div className="hero_content">
                                    <Row>
                                        <Col md={6}>
                                            <div className="hero_image">
                                                <img src={hero_img} alt="hero image" />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="helo_right_content">
                                                <h4> Max Hospitals, India - The best Hospitals for Liver Transplant and Liver diseases  </h4>
                                                <p>We provide comprehensive care for all liver related diseases and liver transplant. We incorporate the latest advancements of the medical field (like Robotics Assisted surgery) to offer personalised care for all our patients.</p>
                                                <div className="h_list">
                                                    <ul>
                                                        <li>  <strong>120+</strong>specialist doctors </li>
                                                        <li><strong>120+</strong>specialist doctors</li>
                                                        <li><strong>120+</strong>specialist doctors</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={4} className="text-end" >
                                <div className="hero_form_section">
                                    <p>GET A CALL BACK FROM OUR HEALTH ADVISOR</p>
                                    <form action="">
                                        <input type="text" placeholder="Phone*"/>
                                        <input type="text" placeholder="Name*" />
                                        <select name="" id="">
                                            <option selected disabled>Select Hospotal*</option>
                                            <option value="Max Hospital, Saket">Max Hospital, Saket</option>
                                            <option value="Max Hospital, Saket">Max Smart Hospital, Saket</option>
                                            <option value="Max Hospital, Saket">Max Hospital, Patparganj</option>
                                            <option value="Max Hospital, Saket">Max Hospital, Vaishali</option>
                                        </select>
                                        <input type="email" placeholder="Email"  />
                                        <textarea placeholder="Write your query (Optional)" name="" id="" cols="30" rows="10"> </textarea>
                                        <button className="hero_submit_btn" >Submit</button>
                                        <div className="fm_text">
                                            <p>By clicking you agree to our T&Cs</p>
                                            <input type="checkbox"  /> <span>Get Updates on Whatsapp </span>
                                            <p>We will never share your personal info</p>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
          </div>
        </Fragment>
    )

}



export default Navbar;