import React, { Fragment } from "react";
import Accordion from 'react-bootstrap/Accordion';

const Footer = () => {
    
    return(

        <Fragment>
            <div className="footer_section">
                <div className="container">
                    <div className="footer_area">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header></Accordion.Header>
                                <Accordion.Body>
                                    <div className="footer_list">
                                        <ul className="d-flex">
                                            <li><a href="#">liver cirrhosis liver palmar erythema</a></li>
                                            <li><a href="#">Liver Transplant in vaishali</a></li>
                                            <li><a href="#">Liver Test</a></li>
                                            <li><a href="#">Liver Transplant in dehradun</a></li>
                                            <li><a href="#">Acute Liver Failure (ALF)</a></li>
                                            <li><a href="#">Alcoholic Liver Disease</a></li>
                                            <li><a href="#">Hepatitis B</a></li>
                                            <li><a href="#">Liver Transplant in patparganj</a></li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item> 
                        </Accordion>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default Footer