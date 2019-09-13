import React, { Component } from "react";
import "./work_experience.css";
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
                                <img src={Achieve} id="achieve_logo"/>
                            </div>
                            <div class="list_column">
                                <p>Achieve Internet</p>
                                <p>Software Engineering Intern</p>
                                <p>07/19 - 08/19</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="list_row">
                            <div class="list_column">
                                <img src={Occuspace} id="occuspace_logo"/>
                            </div>
                            <div class="list_column">
                                <p>Occuspace</p>
                                <p>Full Stack Web Development Intern</p>
                                <p>06/18 - 10/18</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="list_row">
                            <div class="list_column">
                                <img src="https://logo.clearbit.com/jsco.net" id="john_stewart_logo"/>
                            </div>
                            <div class="list_column">
                                <p>John Stewart Company</p>
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