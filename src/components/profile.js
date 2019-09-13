import React, { Component } from "react";
import './profile.css';
import Sam from '../images/IMG_1816.jpeg';

class Profile extends Component {
    render() {
        return(
            <section id="main-list">
                <h1>Sam Vedernikoff</h1>
                <img src={Sam} width="400" height="400"/>
                <div id="objective">
                    <h2>Objective:</h2>
                    <p>I am looking for a full time software engineering position as a web developer where I can build backend services and deliver dynamic content to clients.</p>
                </div>
                <div id="contact_info">
                    <h2>Contact Info:</h2>
                    <p>Contact Info: samvedernikoff@gmail.com</p>           
                    <a href="https://www.linkedin.com/in/vsam/">
                        <img src="https://image.flaticon.com/icons/svg/174/174857.svg" width="50" height="50"/>
                    </a>
                    <a href="https://github.com/vsam">
                        <img src="https://image.flaticon.com/icons/svg/25/25231.svg" width="50" height="50"/>
                    </a>
                </div>
            </section>
        );
    }
}
export default Profile;