import React, { Component } from "react";

class Education extends Component {
    render() {
        return(
            <section id="main-list">
                <h2>Education</h2>
                <ul id="inner_list">
                    <li>
                        <div>
                            <p>University of California - San Diego</p>
                            <p><span id="major">Major:</span> Math and Computer Science</p>
                        </div>
                        <div>
                            <p>Relevant Coursework:</p>
                            <p>Advanced Data Structures, Design and Analysis of Algorithms, Software Engineering, Computer Systems, Software Tools, Theory of Computation, Object Oriented Design, Statistical Methods, etc.</p>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}
export default Education;