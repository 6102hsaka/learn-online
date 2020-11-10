import { faEnvelope, faPhone, faFax } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

const Footer = () => (
    <footer className="custom-footer pt-3">
        <div className="container-fluid">
            <Row className="justify-content-center">
                <Col xs={{ size:3, offset:1}}>
                    <h4>Links</h4>
                    <ul className="list-unstyled">
                        <li> <Link to='/home'>Home</Link> </li>
                        <li> <Link to='/aboutus'>About US</Link> </li>
                        <li> <Link to='/teachers'>Teachers</Link> </li>
                        <li> <Link to='/students'>Students</Link> </li>
                    </ul>
                </Col>
                <Col xs={{size:6, offset:1}}>
                    <h4>Our Address</h4>
                    <address>
                        66, G.T Road<br />
                        Howrah, West Bengal<br />
                        India<br />
                        <FontAwesomeIcon icon={faPhone} />: +91 99999 55555<br />
                        <FontAwesomeIcon icon={faFax} />: +852 8765 4321<br />
                        <FontAwesomeIcon icon={faEnvelope} />: <a href="mailto:akash.sharma@java.net">
                            akash.sharma@java.net</a>
                    </address>
                </Col>
            </Row>
            <Row>
                <Col className="mb-3">
                    &copy; 2020 Akash Sharma
                </Col>
            </Row>
        </div>
    </footer>
)

export default Footer;