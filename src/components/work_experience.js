import React, { Component } from "react";
import Achieve from '../images/achieve.png';
import Occuspace from '../images/occuspace.png';

class WorkExperience extends Component {
    render() {
        return (
            <section id="main-list">
                <h2>Work Experience</h2>
                <ul id="inner_list">
                    <li>
                        <div class="list_row">
                            <div class="list_column">
                                <a href="https://www.achieveinternet.com/">
                                    <img src={Achieve} id="achieve_logo"/>
                                </a>
                            </div>
                            <div class="list_column">
                                <a href="https://www.achieveinternet.com/">Achieve Internet</a>
                                <p>Software Engineering Intern</p>
                                <p>07/19 - 08/19</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="list_row">
                            <div class="list_column">
                                <a href="https://occuspace.io/">
                                    <img src={Occuspace} id="occuspace_logo"/>
                                </a>
                            </div>
                            <div class="list_column">
                                <a href="https://occuspace.io/">Occuspace</a>
                                <p>Full Stack Web Development Intern</p>
                                <p>06/18 - 10/18</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="list_row">
                            <div class="list_column">
                                <a href="https://jsco.net">
                                    <img src="https://logo.clearbit.com/jsco.net" id="john_stewart_logo"/>
                                </a>
                            </div>
                            <div class="list_column">
                                <a href="https://jsco.net">John Stewart Company</a>
                                <p>Administrative Assistant</p>
                                <p>06/16 - 09/16</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}
export default WorkExperience;