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
                        <ul className='d-flex'>
                            <li>GET <span>free</span> ASSISTANCE</li>
                            <li>
                                <img src={img} alt="" />
                            </li>
                            <li>
                                <a href="tel:+91 87500 42481">+91 87500 42481</a>
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
