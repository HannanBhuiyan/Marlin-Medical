import React, { Fragment } from "react"; 
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import './summery.css'

const Summery = () => {
    return (
        <Fragment>
            <div className="summery_section">
                <div className="container">
                    <div className="summery_inner">
                        <Row className="align-items-center">
                            <Col md={6}>
                                <div className="summery_text">
                                    <h2>Why Max Hospital for Liver Transplant & Biliary Sciences?</h2>
                                    <p>With over 6000 successful liver transplants for patients across international borders, Max Healthcare has been credited as one of the best liver hospitals in India.</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <img src="" alt="" />
                                <div className="summery_vid">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Shvd46gNKTE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Summery