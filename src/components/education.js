import React, { Component } from "react";
import './education.css';

class Education extends Component {
    render() {
        return(
            <section id="main-list">
                <h2>Education</h2>
                <ul id="education_list">
                    <li>
                        <div>
                            <p>University of California - San Diego</p>
                        </div>
                        <div>
                            <p>Relevant Coursework:</p>
                            <p>Data Structures, Algorithms, Software Engineering, etc</p>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}
export default Education;