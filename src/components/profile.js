import React, { Component } from "react";
import Sam from '../images/IMG_1816.jpeg';
import Gmail from '../images/gmail.png';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }
    
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
                    <div class="row">  
                        <div class="icon_column">
                            <a href="https://www.linkedin.com/in/vsam/">
                                <img src="https://image.flaticon.com/icons/svg/174/174857.svg" width="50" height="50"/>
                            </a>
                        </div>
                        <div class="icon_column">
                            <a href="https://github.com/vsam">
                                <img src="https://image.flaticon.com/icons/svg/25/25231.svg" width="50" height="50"/>
                            </a>
                        </div>
                        <div class="icon_column">
                            <img src={Gmail} onClick={() => {
                                alert("sam.vedernikoff@gmail.com")
                            }} width="50" height="50"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Profile;