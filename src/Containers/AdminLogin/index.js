import React, { Component } from 'react'
import firebase from "../../Config/Firebase";
import { GrFormAdd } from "react-icons/gr"
import { MdDeleteForever } from 'react-icons/md'
import './index.css'

export class AdminLogin extends Component {

    constructor() {
        super()
        this.state = {
            isAdmin: false,
            footerLinks: [],
        }
    }

    componentDidMount() {
        const key = this.props.match.params.adminKey
        if (key) {
            firebase.database().ref("admin_key").on("value", (data) => {
                let a = data.val()
                if (a === key) {
                    localStorage.setItem("isAdmin", true)
                    // window.location.href = "/"
                    this.setState({ isAdmin: true })
                } else {
                    localStorage.setItem("isAdmin", true)
                    window.location.href = "/"
                }
            })
            // let arr = [
            //     {
            //         link: "https://www.linkedin.com/in/rick-b-chavez",
            //         linkText: "Linkedin",
            //     },
            //     {
            //         link: "/signup",
            //         linkText: "Sign up for the Email list",
            //     }
            // ]
            // firebase.database().ref("footer_more_links").set(arr)
            firebase.database().ref("footer_more_links").on("value", (data) => {
                let a = data.val()
                if (a) {
                    this.setState({ footerLinks: a })
                } else {
                    this.setState({ footerLinks: [] })
                }
            })
        }
    }

    render() {
        return (
            this.state.isAdmin && <div className="admin-footer-adjustments">
                <div className="list-links-footer">
                    <div className="top-icilf">
                        <h3>Footer More Links</h3>
                        <p onClick={() => {
                            let obj = {
                                link: "",
                                linkText: "",
                            }
                            this.state.footerLinks.push(obj)
                            this.setState({ footerLinks: this.state.footerLinks })
                        }}><GrFormAdd /> Add New </p>
                    </div>
                    {this.state.footerLinks.length > 0 && this.state.footerLinks.map((y, i) => {
                        return <div className="inner-container-ilf">
                            <input type="text" placeholder="Link text" value={y.linkText} onChange={(e) => {
                                y.linkText = e.target.value
                                this.setState({ footerLinks: this.state.footerLinks })
                            }} onBlur={() => {
                                firebase.database().ref("footer_more_links").set(this.state.footerLinks)
                            }} />
                            <input type="text" placeholder="Link URL" value={y.link} onChange={(e) => {
                                y.link = e.target.value
                                this.setState({ footerLinks: this.state.footerLinks })
                            }} onBlur={() => {
                                firebase.database().ref("footer_more_links").set(this.state.footerLinks)
                            }} />
                            <MdDeleteForever onClick={() => {
                                this.state.footerLinks.splice(i, 1)
                                firebase.database().ref("footer_more_links").set(this.state.footerLinks)
                            }} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default AdminLogin
