import React, { Component } from "react";
import './projects.css';

class Projects extends Component {
    render() {
        return(
            <section id="main-list">
                <h2>Projects</h2>
                <ul id="project_list">
                    <li>
                        <div>
                            <p>
                                <a href="https://ride-f1e96.web.app/">Ride+</a>
                            </p>
                            <p>Javascript (2019)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>
                                <a href="https://github.com/vsam/TouchTop">App Sync</a>
                            </p>
                            <p>Android (2018)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>
                                <a href="https://github.com/vsam/App-Sync-Companion">App Sync Companion</a>
                            </p>
                            <p>
                                Javascript (2018)
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>
                                <a href="https://github.com/vsam/property-database">Property Database</a>
                            </p>
                            <p>
                                Java (2017)
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}
export default Projects;