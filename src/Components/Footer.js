import React, { Component } from 'react'
import './index.css'

export class Footer extends Component {
    render() {
        return (
            <div className="footer-bottom-main">
                <div className="container-fbm">
                    <h1 className="heading-cfbm">2nd to None PT | San Marcos, CA</h1>
                    <div className="container-row-fbm">
                        <div className="inner-container-row-fbm">
                            <p className="title-icrf">Contact Us</p>
                            <p className="content-icrf" onClick={() => {
                                window.open(
                                    "https://www.yelp.com/map/2nd-to-none-physical-therapy-san-marcos-2",
                                    "_blank"
                                )
                            }}>Our Address: 737 Windy Point Dr Ste H & I San Marcos, CA 92069</p>
                            <p className="content-icrf">Phone Number: (760)-759-3494</p>
                            <p className="content-icrf">Email: rick.chavez@2ndtononept.com</p>
                        </div>
                        <div className="inner-container-row-fbm">
                            <p className="title-icrf">For You</p>
                            <p className="content-icrf">Resources</p>
                            <p className="content-icrf" onClick={() => {
                                window.open(
                                    "https://pteverywhere.com/",
                                    "_blank"
                                )
                            }}>PT Everywhere</p>
                            <p className="content-icrf">Self-Schedule</p>
                            <p className="content-icrf" onClick={() => {
                                window.open(
                                    "https://pteverywhere.com/PtE/s/2ndtonone/register",
                                    "_blank"
                                )
                            }}>Register</p>
                        </div>
                        <div className="inner-container-row-fbm">
                            <p className="title-icrf">Find Us</p>
                            <p className="content-icrf" onClick={() => {
                                window.open(
                                    "https://www.instagram.com/2ndtononept/",
                                    "_blank"
                                )
                            }}>Instagram</p>
                            <p className="content-icrf" onClick={() => {
                                window.open(
                                    "https://www.yelp.com/biz/2nd-to-none-physical-therapy-san-marcos-2",
                                    "_blank"
                                )
                            }}>Yelp</p>
                            <p className="content-icrf" onClick={() => {
                                window.open(
                                    "https://www.instagram.com/rick_b_chavez/",
                                    "_blank"
                                )
                            }}>Follow Dr. Rick on IG</p>
                            <p className="content-icrf" onClick={() => {
                                window.open(
                                    "https://www.yelp.com/map/2nd-to-none-physical-therapy-san-marcos-2",
                                    "_blank"
                                )
                            }}>Get Directions</p>
                        </div>
                        <div className="inner-container-row-fbm">
                            <p className="title-icrf">More Links</p>
                            <p className="content-icrf" onClick={() => {
                                window.open(
                                    "https://www.linkedin.com/in/rick-b-chavez",
                                    "_blank"
                                )
                            }}>Linkedin</p>
                            <p className="content-icrf" onClick={() => {
                                window.location.href = "/signup"
                            }}>Sign up for the Email list</p>
                        </div>
                    </div>
                    <div className="container-bottom-fbm">
                        <button onClick={() => {
                                window.location.href = "/insurance-policy"
                        }}>Why We Don't Accept Insurance</button>
                        <p>Interest-Based Copyright&copy; 2022, 2ndtonone.com, and its affiliates.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
