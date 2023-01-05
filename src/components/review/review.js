import React, { Fragment } from "react";
import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';

const Review = () => {
    return(
        <Fragment>

            <div className="review_section">
                <div className="container">
                    <div className="review_title">
                        <h2>Millions of Patients over 145 countries trust Max Hospitals, India</h2>
                    </div>
                    <div className="review_inner">
                        <div className="review_top">
                            <Row className="align-items-center">
                                <Col md={6}>
                                    <div className="video">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Shvd46gNKTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="review_txt">
                                        <h2>Chronic Liver Disease Treatment with Liver Transplant Surgery</h2>
                                        <div className="review_list">
                                            <ul>
                                                <li><strong>Treated by: </strong>Prof (Dr.) Subhash Gupta</li>
                                                <li><strong>Hospital: </strong>Max Super peciality Hospital Saket</li>
                                                <li><strong>Patient Country: </strong> Africa</li>
                                            </ul>
                                        </div> 
                                        <p>A video on treatment of chronic liver disease through liver transplant surgery. Mr Mubarak Hameed's mother from Nigeria was suffering from chronic liver disease and regularly felt tiredness and pain. With limited options in Africa and Middle east they came to India for treatment at Max Supers peciality Hospital Saket.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="review_bottom">
                            <Row>
                                <Col md={3}>
                                    <iframe src="https://www.youtube.com/embed/jCVFuxG6mMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </Col>
                                <Col md={3}>
                                    <iframe  src="https://www.youtube.com/embed/BzeeTSHSB94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </Col>
                                <Col md={3}>
                                    <iframe src="https://www.youtube.com/embed/80FKkExZw5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </Col>
                                <Col md={3}>
                                    <iframe  src="https://www.youtube.com/embed/2p6DfYPlB7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Review