import React, { Component } from "react";
import './projects.css';
import Ride from '../images/CSE110_LOGO.png';
import AppSync from '../images/AppSync.png';
import AppSyncComp from '../images/AppSyncComp.png';
import Apartment from '../images/apartment.png'


class Projects extends Component {
    render() {
        return(
            <section id="main-list">
                <h2>Projects</h2>
                <ul id="inner_list">
                    <li>
                        <div class="list_row">
                            <div class="list_column">
                                <img src={Ride} id="achieve_logo"/>
                            </div>
                            <div class="list_column">
                                <p>
                                    <a href="https://ride-f1e96.web.app/">Ride+</a>
                                </p>
                                <p>Javascript (2019)</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="list_row">
                            <div class="list_column">
                                <img src={AppSync} id="appsync_logo"/>
                            </div>
                            <div class="list_column">
                                <p>
                                    <a href="https://github.com/vsam/TouchTop">App Sync</a>
                                </p>
                                <p>Android (2018)</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="list_row">
                            <div class="list_column">
                                <img src={AppSyncComp} id="appsync_logo"/>
                            </div>
                            <div class="list_column">
                                <p>
                                    <a href="https://github.com/vsam/App-Sync-Companion">App Sync Companion</a>
                                </p>
                                <p>
                                    Javascript (2018)
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="list_row">
                            <div class="list_column"> 
                            <img src={Apartment} id="achieve_logo"/>
                            </div>
                            <div class="list_column">
                                <p>
                                    <a href="https://github.com/vsam/property-database">Property Database</a>
                                </p>
                                <p>
                                    Java (2017)
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}
export default Projects;