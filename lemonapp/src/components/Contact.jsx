/* Contact component */

import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="contact__content">
                            <div className="contact__content-text">
                                <h1 className="contact__content-title">Contact Page</h1>
                                <p className="contact__content-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                            <div className="contact__content-btn">
                                <Link className="contact__content-link" to="/">Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
