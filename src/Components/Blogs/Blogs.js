import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container'>
            <h1>blog section</h1>

            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body className='text-start'>
                        Authentication is proofing the user is, who they claim to be. Usually with a combination of username and password. Authorisation is giving rights to an authenticated user. These are two separate processes. One is finding out who the user is and the second is what the user is allowed to do.
                        Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body className='text-start'>
                        Firebase, as it allows you to build even complex projects quite easily. It has all the tools you need to get going, from authentication to hosting. The downside of it is that, when you'll have a better understanding of programming and you'll want to build even more complex applications, you will find yourself somewhat restricted from the simplicity of Firebase, and you might wanna start building the backend yourself, as this gives you more flexibility.
                        <br />
                        <br />
                        Other options to implement authentication,
                        <li>Cookie-Based authentication</li>
                        <li>Token-Based authentication</li>
                        <li>Third party access(OAuth, API-token)</li>
                        <li>OpenId</li>
                        <li>SAML</li>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> What other services does firebase provide other than authentication?</Accordion.Header>
                    <Accordion.Body className='text-start'>
                        There are many services which Firebase provides, Most useful of them are:
                        <br />
                        <br />
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Authentication</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        <li>Predictions</li>
                        <li>Cloud Messaging</li>
                        <li>Dynamic Links</li>
                        <li>Remote Config</li>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;