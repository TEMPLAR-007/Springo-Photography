import React from 'react';
import Flogo from '../Images/Social logo/facebook.png'
import Glogo from '../Images/Social logo/github.png'
import Dilogo from '../Images/Social logo/discord.png'
import Elogo from '../Images/Social logo/email.png'

const About = () => {
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-2 mt-5">
                <div className="col-md-8">
                    <div>
                        <div className="card-body text-start">
                            <h5 className="card-title fs-1 fw-light mb-5">About</h5>
                            <p className="card-text">Hello!! I'm Arefin, Photography is my passion. Photography is my window to the world, to see and express myself.</p>

                            <p>I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest!.</p>

                            <figure class="text-end">
                                <blockquote class="blockquote">
                                    <p>"Can I say something? Um, I'm the type of person that if you ask me a question and I don't know the answer, I'm gonna tell you that I don't know. But I bet you what, I know how to find the answer and <span className='text-danger'>I will find the answer</span>."</p>
                                </blockquote>
                                <figcaption class="blockquote-footer mt-3">
                                    Chris Gardner from <cite title="Source Title">The Pursuit of Happyness</cite>
                                </figcaption>
                            </figure>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div>
                        <img src="https://i.ibb.co/fHmP2Ly/IMG-06032022-115912-A4-Portrait-210-x-297-mm.jpg" className="card-img-top w-50 mx-auto" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Arefin Khan</h5>
                            <div className='d-flex justify-content-center gap-4 mt-3 mb-5'>
                                <a href="https://www.facebook.com/Templer007"><img width={25} src={Flogo} alt="" /></a>
                                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"><img width={25} src={Elogo} alt="" /></a>
                                <a href="https://discord.com/channels/@me"><img width={25} src={Dilogo} alt="" /></a>
                                <a href="https://github.com/TEMPLAR-007"><img width={25} src={Glogo} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;