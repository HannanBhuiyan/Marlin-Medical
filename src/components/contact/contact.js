import React, { Fragment } from 'react'
import img from '../../assets/images/fa-girl.png'
import './contact.css'


const Contact = () => {
  return (
     <Fragment>
        <div className="contact_section">
            <div className="container">
                <div className="contact_area"> 
                    <div className="contact_list">
                        <ul className='d-flex align-items-center justify-content-around'>
                            <li><p>GET <span>free</span> ASSISTANCE</p></li>
                            <li>
                                <img src={img} alt="" />
                            </li>
                            <li>
                                <a href="tel:+91 87500 42481"> +91- 8984 900 900</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     </Fragment>
  )
}

export default Contact
