import React, { Component } from "react";
import "./work_experience.css";

class WorkExperience extends Component {
    render() {
        return (
            <section id="main-list">
                <h2>Work Experience</h2>
                <ul id="experience_list">
                    <li>
                        <div class="list_row">
                            <div class="list_column">
                                <img src="https://media.licdn.com/dms/image/C560BAQF5YZQUbmh1tA/company-logo_400_400/0?e=1576713600&v=beta&t=-Ol_zZzOaATOnkFK8LNgefw-f5hVtgltE5ElnNLVC5k" id="achieve_logo"/>
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
                                <img src="https://media.licdn.com/dms/image/C560BAQFpjnw6Gg74bQ/company-logo_400_400/0?e=1576713600&v=beta&t=imIKLb4v13icuScwrCvpgxw2wZgh-MF67Ir58EeQj1k" id="occuspace_logo"/>
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