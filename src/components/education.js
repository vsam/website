import React, { Component } from "react";
import './education.css';

class Education extends Component {
    render() {
        return(
            <section id="main-list">
                <h2>Education</h2>
                <ul id="inner_list">
                    <li>
                        <div>
                            <p>University of California - San Diego</p>
                            <p>Major: Math and Computer Science</p>
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