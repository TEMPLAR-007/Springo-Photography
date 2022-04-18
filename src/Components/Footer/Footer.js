import React from 'react';
import Flogo from '../Images/Social logo/facebook.png'
import Glogo from '../Images/Social logo/github.png'
import Dilogo from '../Images/Social logo/discord.png'
import Elogo from '../Images/Social logo/email.png'
import './Footer.css'


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='fw-lighter mt-5'>Follow</h1>
                        <div className='d-flex justify-content-center gap-4 mt-3 mb-5'>
                            <a href="https://www.facebook.com/Templer007"><img width={25} src={Flogo} alt="" /></a>
                            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"><img width={25} src={Elogo} alt="" /></a>
                            <a href="https://discord.com/channels/@me"><img width={25} src={Dilogo} alt="" /></a>
                            <a href="https://github.com/TEMPLAR-007"><img width={25} src={Glogo} alt="" /></a>
                        </div>
                        <hr />
                        <p><small>copyright @ {year} </small></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;