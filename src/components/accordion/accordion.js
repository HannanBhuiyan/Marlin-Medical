import React, { Fragment, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Col  from 'react-bootstrap/Col';
import Row  from 'react-bootstrap/Row';
import './accordion.css';


const Accordionn = () => {
    return(
        <Fragment> 
            <div className="question_section">
                <div className="container">
                    <div className="question_title text-center">
                        <h2>Why Marlin Hospitals?</h2>
                        <p>
                        We, at Marlin help the patients who are looking for a good medical care services and treatment facility in India. You get an unseamed medical care services right from your first step towards us. We assist our international patients who are sitting far off the borders and are looking for medical advices for their health concerns. At Marlin, we assure to beseech the patients with the help of our experienced team. 
                        </p>
                    </div>
                    <div className="question_inner">
                        <Row>
                            <Col md={6}>
                                <div className="question_item">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Alcoholic liver disease</Accordion.Header>
                                        <Accordion.Body>
                                        Alcohol is the most widely abused agent in the world and its excessive intake is the leading cause of alcoholic liver disease. Alcoholic liver disease is characterised by excessive alcohol consumption; it damages the liver, and leads to scarring, inflammation and can cause a buildup of fats.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Hepatitis B</Accordion.Header>
                                        <Accordion.Body>
                                        Hepatitis B is the most common liver infection in the world and is caused by the hepatitis B virus. The hepatitis B virus enters the body and travels through the blood to the liver. In the liver, it attaches to the liver cells and multiplies. Although the patient may not have any problems at this phase, multiplication of the virus triggers a response from the body’s immune system.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Hepatitis C</Accordion.Header>
                                        <Accordion.Body>
                                        Hepatitis C is an inflammatory disease spread by direct blood-to-blood contact. It is difficult to get or give hepatitis C unless there is blood transfusion involved.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Hepatitis A</Accordion.Header>
                                        <Accordion.Body>
                                            Hepatitis A is a viral liver disease that can cause mild to severe illness. It is characterised by inflammation (irritation and swelling) of the liver, Hepatitis A virus is transmitted through ingestion of contaminated food and water, or through direct contact with an infectious person.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="question_item">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Living donor Transplant</Accordion.Header>
                                        <Accordion.Body>
                                        Living donor transplant is a procedure wherein a part of the liver is taken from a living person who has volunteered to donate the part to be transplanted into another individual experiencing end stage liver disease. The liver is the only part of the body that can regenerate itself, and can regrow into a full organ in a span of a few months.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>Paediatric Liver transplant</Accordion.Header>
                                        <Accordion.Body>
                                        Paediatric liver transplant is a procedure for children with serious liver diseases to have their liver replaced by a living donor or deceased donor’s liver. The liver can grow back on its own usually and reaches its full size in a few months.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="7">
                                        <Accordion.Header>Liver Cancer</Accordion.Header>
                                        <Accordion.Body>
                                        Liver cancer, also known as hepatocellular cancer, is a cancer that originates in the liver. It is also known as primary liver cancer. Cancer that exists in other parts of the body and spreads to the liver and is known as liver metastases or secondary liver cancer. Liver cancer may also affect the biliary system (like cholangiocarcinoma, i.e bile duct cancer).
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="8">
                                        <Accordion.Header>Acute Liver Failure</Accordion.Header>
                                        <Accordion.Body>
                                        Acute liver failure occurs when your liver rapidly loses its ability to function. Commonly, liver failure develops slowly over the course of years, but in acute liver failure, liver failure develops in a matter of days. Acute liver failure is less common than chronic liver failure. Acute liver failure is an emergency and needs immediate hospitalisation.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </Fragment> 
    )

}

export default Accordionn;