import React, { Component } from 'react'
import bannervideo from '../../assets/bannervideo.mp4'
import footervideo from '../../assets/footervideo.mp4'
import midvideo from '../../assets/midvideo.mp4'
import imgfifth from '../../assets/herologo.jpg'
import courage from '../../assets/courage.svg'
import integrity from '../../assets/integrity.svg'
import patience from '../../assets/patience.svg'
import logofile from '../../assets/logofile.png'
import { BiChevronRight } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiEditAlt } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'
import CloseIcon from '@mui/icons-material/Close';
import firebase from "../../Config/Firebase";
import './index.css'
import Footer from '../../Components/Footer'

export class Home extends Component {

    constructor() {
        super()
        this.state = {
            homeActive: true,
            aboutActive: false,
            testimonialsActive: false,
            missionActive: false,
            hiwActive: false,
            popupOpen: false,
            firstSections: [],
            testimonialSection: "",
            midSections: [],
            bottomSections: [],
            createImageArray: [],
            dropFile: [],
            heading1: "",
            heading2: "",
            buttonLink: "",
            buttonText: "",
            description: "",
            selectedSectionToCreate: "top",
            createPopup: false,
            selectedIndexToEdit: 0,
            editImageArray: [],
            dropFileEdit: [],
            editPopup: false,
            selectedSectionToEdit: "top",
            isAdmin: false,
        }
    }

    componentDidMount() {

        let isAdmin = localStorage.getItem("isAdmin")
        if (isAdmin) {
            this.setState({ isAdmin })
        }

        // let arrFirst = [
        //     {
        //         heading1: "WHO ARE WE?",
        //         heading2: "2nd to None PT",
        //         description: "Dr. Rick Chavez is a SoCal native and a U.S. Army Veteran. He has played all different types of sports throughout his life and has been performing strength and conditioning for the last 10 years of his life. As a Physical Therapist, Dr. Rick understands how to manage symptoms and prescribe therapeutic exercises to alleviate pain. As a Certified Strength and Conditioning Specialist (CSCS), Dr. Rick can help propel your physical and mental toughness to the next level!",
        //         buttonLink: "",
        //         buttonText: "",
        //         image: "https://firebasestorage.googleapis.com/v0/b/crystal-signup.appspot.com/o/shakehands.jpg?alt=media&token=5ad7c981-b045-4490-841d-634b232b48d2",
        //     },
        //     {
        //         heading1: "2ND TO NONE PT | SAN MARCOS, CA",
        //         heading2: "Why Us?",
        //         description: "As an avid thrill-seeker, Dr. Rick knows what it takes to perform at a high-level when playing a multitude of sports such as: soccer, mountain biking, Olympic weightlifting, snowboarding, CrossFit, skateboarding, sprinting, football, etc. Plus, Dr. Rick will be the only healthcare professional managing your plan of care and he will be with you throughout every minute of your treatment",
        //         buttonLink: "",
        //         buttonText: "",
        //         image: "https://firebasestorage.googleapis.com/v0/b/crystal-signup.appspot.com/o/userpiclength.jpg?alt=media&token=5694b0d5-c449-4986-a96b-abcc7be64df6",
        //     }
        // ]

        firebase.database().ref("first_section_inners").on("value", (data) => {
            let a = data.val()
            if (a) {
                this.setState({ firstSections: a })
            } else {
                this.setState({ firstSections: [] })
            }
        })

        firebase.database().ref("mid_section_inners").on("value", (data) => {
            let a = data.val()
            if (a) {
                this.setState({ midSections: a })
            } else {
                this.setState({ midSections: [] })
            }
        })

        firebase.database().ref("bottom_section_inners").on("value", (data) => {
            let a = data.val()
            if (a) {
                this.setState({ bottomSections: a })
            } else {
                this.setState({ bottomSections: [] })
            }
        })

        firebase.database().ref("testimonials").on("value", (data) => {
            let a = data.val()
            this.setState({ testimonialSection: a })
        })
    }

    createSection() {
        const { heading1, heading2, createImageArray, description, buttonLink, buttonText, selectedSectionToCreate, dropFile } = this.state
        if (createImageArray.length > 0) {
            dropFile.map((e) => {
                firebase.storage().ref().child(`uploadedImages/${e.name}`).put(e)
                    .then((snapshot) => {
                        snapshot.ref.getDownloadURL().then((snapUrl) => {
                            let obj = {
                                heading1,
                                heading2,
                                description,
                                buttonLink,
                                buttonText,
                                image: snapUrl
                            }
                            if (selectedSectionToCreate === "top") {
                                this.state.firstSections.push(obj)
                                firebase.database().ref("first_section_inners").set(this.state.firstSections).then(() => {
                                    this.setState({ createPopup: false, selectedSectionToCreate: "" })
                                })
                            } else if (selectedSectionToCreate === "mid") {
                                this.state.midSections.push(obj)
                                firebase.database().ref("mid_section_inners").set(this.state.midSections).then(() => {
                                    this.setState({ createPopup: false, selectedSectionToCreate: "" })
                                })
                            } else if (selectedSectionToCreate === "bottom") {
                                this.state.bottomSections.push(obj)
                                firebase.database().ref("bottom_section_inners").set(this.state.bottomSections).then(() => {
                                    this.setState({ createPopup: false, selectedSectionToCreate: "" })
                                })
                            }
                        })
                    })
            })
        }
    }

    editSection() {
        const { heading1, heading2, editImageArray, description, buttonLink, buttonText, selectedSectionToEdit, dropFileEdit } = this.state
        if (dropFileEdit.length > 0) {
            dropFileEdit.map((e) => {
                firebase.storage().ref().child(`uploadedImages/${e.name}`).put(e)
                    .then((snapshot) => {
                        snapshot.ref.getDownloadURL().then((snapUrl) => {
                            let obj = {
                                heading1,
                                heading2,
                                description,
                                buttonLink,
                                buttonText,
                                image: snapUrl
                            }
                            if (selectedSectionToEdit === "top") {
                                this.state.firstSections.splice(this.state.selectedIndexToEdit, 1, obj)
                                firebase.database().ref("first_section_inners").set(this.state.firstSections).then(() => {
                                    this.setState({ editPopup: false, selectedSectionToEdit: "" })
                                })
                            } else if (selectedSectionToEdit === "mid") {
                                this.state.midSections.splice(this.state.selectedIndexToEdit, 1, obj)
                                firebase.database().ref("mid_section_inners").set(this.state.midSections).then(() => {
                                    this.setState({ editPopup: false, selectedSectionToEdit: "" })
                                })
                            } else if (selectedSectionToEdit === "bottom") {
                                this.state.bottomSections.splice(this.state.selectedIndexToEdit, 1, obj)
                                firebase.database().ref("bottom_section_inners").set(this.state.bottomSections).then(() => {
                                    this.setState({ editPopup: false, selectedSectionToEdit: "" })
                                })
                            }
                        })
                    })
            })
        } else {
            let obj = {
                heading1,
                heading2,
                description,
                buttonLink,
                buttonText,
                image: editImageArray[0]
            }
            if (selectedSectionToEdit === "top") {
                this.state.firstSections.splice(this.state.selectedIndexToEdit, 1, obj)
                firebase.database().ref("first_section_inners").set(this.state.firstSections).then(() => {
                    this.setState({ editPopup: false, selectedSectionToEdit: "" })
                })
            } else if (selectedSectionToEdit === "mid") {
                this.state.midSections.splice(this.state.selectedIndexToEdit, 1, obj)
                firebase.database().ref("mid_section_inners").set(this.state.midSections).then(() => {
                    this.setState({ editPopup: false, selectedSectionToEdit: "" })
                })
            } else if (selectedSectionToEdit === "bottom") {
                this.state.bottomSections.splice(this.state.selectedIndexToEdit, 1, obj)
                firebase.database().ref("bottom_section_inners").set(this.state.bottomSections).then(() => {
                    this.setState({ editPopup: false, selectedSectionToEdit: "" })
                })
            }
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar-fixed-top">
                    <div className="container-nft">
                        <div className="left-navbar">
                            <img src={logofile} alt="logo-responsive" onClick={() => {
                                this.setState({ homeActive: true, aboutActive: false, testimonialsActive: false, missionActive: false, hiwActive: false, popupOpen: false })
                                window.scrollTo(0, 0)
                            }} />
                        </div>
                        <div className={`mid-navbar ${this.state.popupOpen ? "popupopen" : ""}`}>
                            {window.innerWidth < 1200 && <CloseIcon style={{ color: "white", fontSize: 38 }} onClick={() => this.setState({ popupOpen: false })} />}
                            <ul>
                                <li className={`${this.state.homeActive && "active"}`}>
                                    <a href="#" onClick={() => {
                                        this.setState({ homeActive: true, aboutActive: false, testimonialsActive: false, missionActive: false, hiwActive: false, popupOpen: false })
                                    }}>Home</a>
                                </li>
                                <li className={`${this.state.aboutActive && "active"}`}>
                                    <a href="#about" onClick={() => {
                                        this.setState({ homeActive: false, aboutActive: true, testimonialsActive: false, missionActive: false, hiwActive: false, popupOpen: false })
                                    }}>About 2nd to None</a>
                                </li>
                                <li className={`${this.state.testimonialsActive && "active"}`}>
                                    <a href="#testimonials" onClick={() => {
                                        this.setState({ homeActive: false, aboutActive: false, testimonialsActive: true, missionActive: false, hiwActive: false, popupOpen: false })
                                    }}>Testimonials</a>
                                </li>
                                <li className={`${this.state.missionActive && "active"}`}>
                                    <a href="#mission" onClick={() => {
                                        this.setState({ homeActive: false, aboutActive: false, testimonialsActive: false, missionActive: true, hiwActive: false, popupOpen: false })
                                    }}>Our Mission</a>
                                </li>
                                <li className={`${this.state.hiwActive && "active"}`}>
                                    <a href="#howitworks" onClick={() => {
                                        this.setState({ homeActive: false, aboutActive: false, testimonialsActive: false, missionActive: false, hiwActive: true, popupOpen: false })
                                    }}>How it works</a>
                                </li>
                                {window.innerWidth < 1200 && <div className="right-navbar">
                                    <button>Get started</button>
                                    <button>Self schedule</button>
                                </div>}
                            </ul>
                        </div>
                        {window.innerWidth > 1200 ? <div className="right-navbar">
                            <button>Get started</button>
                            <button>Self schedule</button>
                        </div> : <div className="right-navbar">
                            <GiHamburgerMenu onClick={() => this.setState({ popupOpen: true })} />
                        </div>}
                    </div>
                </nav>
                <div className="banner-section-home">
                    <div className="overlay-bsh-main">

                    </div>
                    <video src={bannervideo} autoPlay loop muted playsInline></video>
                    <div className="content-bsh">
                        <h3>2nd to None PT | San Marcos, CA</h3>
                        <h4>Physical Therapy and Wellness</h4>
                        <p>Tired of fearing pain? Tired of not being able to do the things you love? Tired of missing out on life? 2nd to None Physical Therapy provides top of the line physical therapy, Sports Rehabilitation and Strength & Conditioning.</p>
                        <div className="buttoncontainer-bsh">
                            <button>Get Started <BiChevronRight /></button>
                        </div>
                    </div>
                </div>
                <div className="container-aboutsections" id="about" style={{ paddingBottom: 0 }}>
                    {this.state.isAdmin && window.innerWidth > 768 && <h3 className="add-section-heading" onClick={() => this.setState({ createPopup: true, selectedSectionToCreate: "top" })}><font>Add New Section</font></h3>}
                    {this.state.firstSections.length > 0 && this.state.firstSections.map((y, i) => {
                        return <div className="content-cas">
                            {window.innerWidth > 768 && this.state.isAdmin && <div className="icons-top-ccas">
                                <div className="inner-icon-tccas" onClick={() => {
                                    this.setState({
                                        editPopup: true, selectedIndexToEdit: i, selectedSectionToEdit: "top",
                                        heading1: y.heading1,
                                        heading2: y.heading2,
                                        description: y.description,
                                        buttonLink: y.buttonLink,
                                        buttonText: y.buttonText,
                                        editImageArray: [y.image],
                                    })
                                }}>
                                    <BiEditAlt />
                                </div>
                                <div className="inner-icon-tccas">
                                    <MdDeleteForever onClick={() => {
                                        this.state.firstSections.splice(i, 1)
                                        firebase.database().ref("first_section_inners").set(this.state.firstSections)
                                    }} />
                                </div>
                            </div>}
                            <div className="left-ccas">
                                <p className="first-heading-ccas">{y.heading1}</p>
                                <p className="second-heading-ccas">{y.heading2}</p>
                                <p className="desc-heading-ccas">{y.description}</p>
                                {y.buttonText && <button onClick={() => {
                                    if (y.buttonLink) {
                                        window.open(
                                            y.buttonLink,
                                            '_blank' // <- This is what makes it open in a new window.
                                        )
                                    }
                                }}>{y.buttonText}</button>}
                            </div>
                            <div className="right-ccas firstrccas">
                                <img src={y.image} alt="imgright" />
                            </div>
                        </div>
                    })}
                </div>
                <div className="black-section-fullwidth" style={{ marginBottom: 0 }}>
                    <div className="container-aboutsections">
                        <div className="content-cas" id="testimonials">
                            <div className="left-ccas">
                                <p className="first-heading-ccas">{this.state.testimonialSection.heading1}</p>
                                <p className="second-heading-ccas">{this.state.testimonialSection.heading2}</p>
                                <p className="desc-heading-ccas">{this.state.testimonialSection.description}</p>
                            </div>
                            <div className="right-ccas">
                                <img src={this.state.testimonialSection.image} alt="imgright" />
                            </div>
                        </div>
                        {this.state.isAdmin && window.innerWidth > 768 && <h3 className="add-section-heading" style={{ color: "white", marginBottom: 0, marginTop: 60 }} onClick={() => this.setState({ createPopup: true, selectedSectionToCreate: "mid" })}><font>Add New Section</font></h3>}
                        {this.state.midSections.length > 0 && this.state.midSections.map((y, i) => {
                            return <div className="content-cas">
                                {window.innerWidth > 768 && this.state.isAdmin && <div className="icons-top-ccas">
                                    <div className="inner-icon-tccas" onClick={() => {
                                        this.setState({
                                            editPopup: true, selectedIndexToEdit: i, selectedSectionToEdit: "mid",
                                            heading1: y.heading1,
                                            heading2: y.heading2,
                                            description: y.description,
                                            buttonLink: y.buttonLink,
                                            buttonText: y.buttonText,
                                            editImageArray: [y.image],
                                        })
                                    }}>
                                        <BiEditAlt />
                                    </div>
                                    <div className="inner-icon-tccas">
                                        <MdDeleteForever onClick={() => {
                                            this.state.midSections.splice(i, 1)
                                            firebase.database().ref("mid_section_inners").set(this.state.midSections)
                                        }} />
                                    </div>
                                </div>}
                                <div className="left-ccas">
                                    <p className="first-heading-ccas">{y.heading1}</p>
                                    <p className="second-heading-ccas">{y.heading2}</p>
                                    <p className="desc-heading-ccas">{y.description}</p>
                                    {y.buttonText && <button onClick={() => {
                                        if (y.buttonLink) {
                                            window.open(
                                                y.buttonLink,
                                                '_blank' // <- This is what makes it open in a new window.
                                            )
                                        }
                                    }}>{y.buttonText}</button>}
                                </div>
                                <div className="right-ccas thirdrccas">
                                    <img src={y.image} alt="imgright" />
                                </div>
                            </div>
                        })}
                        <div className="content-cas" style={{ flexDirection: "row-reverse" }} id="mission">
                            <div className="left-ccas" style={{ maxWidth: 660, paddingLeft: 30 }}>
                                <p className="first-heading-ccas">OUR MISSION, VISION, & VALUES</p>
                                <p className="second-heading-ccas">Mission</p>
                                <p className="desc-heading-ccas" style={{ color: "white" }}>Empower individuals who prioritize their health to become competent in self-management of their symptoms.</p>
                                <p className="second-heading-ccas">Vision</p>
                                <p className="desc-heading-ccas" style={{ color: "white" }}>Empower individuals who prioritize their health to become competent in self-management of their symptoms.</p>
                                <p className="second-heading-ccas">Values</p>
                                <p className="desc-heading-ccas" style={{ maxWidth: 500, color: "white" }}>Courage — In spite of fear, movement is and will always be the best medicine. Even though you may have recently gone through a traumatic experience, our experts will ensure to get you moving well.</p>
                                <p className="desc-heading-ccas" style={{ maxWidth: 500, color: "white" }}>Integrity — Doing what is right, all the time. When Dr. Rick prescribes exercises and/or mobility treatments, he is doing it with your goals in mind. Dr. Rick will explain every step of the way what you’re performing, how to perform it and why you’re performing it..</p>
                                <p className="desc-heading-ccas" style={{ maxWidth: 500, color: "white" }}>Transparency — Effective communication is the key to success. Dr. Rick will have honest and upfront conversations about your plan of care, how to attain your goals and the smoothest path to take. No fluff involved here.</p>
                                <p className="desc-heading-ccas" style={{ maxWidth: 500, color: "white" }}>Patience — This is a virtue we can all work on. There is no one-size fits all approach when it comes to Physical Therapy. Dr. Rick ensures that every exercise and mobility treatment prescribed to you is EXACTLY what you need. As long as you perform them as outlined in your regimen, your goals will surely be met.</p>
                            </div>
                            <div className="right-ccas" style={{ maxWidth: 660 }}>
                                <img src={imgfifth} alt="imgright" style={{ marginBottom: 30 }} />
                                <img src="https://firebasestorage.googleapis.com/v0/b/crystal-signup.appspot.com/o/8.jpg?alt=media&token=8a15bdc5-b470-4323-94f9-9ae9de36da73" alt="imgright" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="howitworks-section" id="howitworks" style={{ paddingTop: 70 }}>
                    <h2>How it works</h2>
                    <div className="container-hiw-section">
                        <div className="inner-container-hiws">
                            <div className="img-ichiws">
                                <img src={courage} />
                            </div>
                            <p className="heading-ichiws">Part 1: Decrease symptoms!</p>
                            <p className="desc-ichiws">If you’re suffering in pain and don’t know why, this phase will help you decrease symptoms and allow you to manage them on your own.</p>
                        </div>
                        <div className="inner-container-hiws">
                            <div className="img-ichiws">
                                <img src={integrity} />
                            </div>
                            <p className="heading-ichiws">Part 2: Find the root cause!</p>
                            <p className="desc-ichiws">Often, we think knee pain is cause by the knee (duh). This is a common misconception. Dr. Rick will perform a thorough 75-min evaluation to determine where the pain is coming from and how to correct any movement faults.</p>
                        </div>
                        <div className="inner-container-hiws">
                            <div className="img-ichiws">
                                <img src={patience} />
                            </div>
                            <p className="heading-ichiws">Part 3: Self-Management!</p>
                            <p className="desc-ichiws">Self-Management! Throughout your personalized treatment plan, Dr. Rick will provide you with the tools and resources to assist you in becoming pain-free and return to your active-lifestyle.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="container-aboutsections">
                    <div className="content-cas">
                        <div className="left-ccas">
                            <p className="first-heading-ccas">RESOURCES</p>
                            <p className="second-heading-ccas">2nd To None offers free resources for everyone</p>
                            <p className="desc-heading-ccas">2nd to None PT supports numerous non-profit organizations both financially and through their time and effort. 2nd to None PT enjoys focusing their efforts on giving back to the less fortunate and Veterans with mentorship and guidance so that they may pursue post-professional training and higher positions of power in their communities.</p>
                        </div>
                        <div className="right-ccas resourcesrccas">
                        </div>
                    </div>
                </div> */}
                <div className="black-section-fullwidth bsfw-marginnone" style={{ marginBottom: 0 }}>
                    <div className="container-aboutsections">
                        <div className="content-cas">
                            <div className="left-ccas">
                                <p className="first-heading-ccas">RESOURCES</p>
                                <p className="second-heading-ccas">Dr. Rick & Rebeca | 2nd To None PT</p>
                                <p className="desc-heading-ccas">Rick and his wife live in Escondido, CA with their son and two crazy dogs. They live in a great neighborhood and cherish their time with their little family. Their business, 2nd to None PT, generates 100’s of pain-free patients each year. They provide a quality of service that is second to none and allows their patients to return to doing the things they love to do. Rick lives a life that is both humble and fulfilling. He worships God daily, enjoys working with his wife and awesome patients and has the time freedom to enjoy those great relationships in the great outdoors of southern California. Click below to follow along the journey!</p>
                            </div>
                            <div className="right-ccas resourcesrccassecond">
                                {/* <img src="https://firebasestorage.googleapis.com/v0/b/crystal-signup.appspot.com/o/rick.jpg?alt=media&token=0da32463-f734-4d07-88ab-5bfe9b54a828" alt="imgright" /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-section-home midvideosection" style={{ marginTop: 0 }}>
                    <div className="bgopacitydiv">

                    </div>
                    <video src={midvideo} autoPlay loop muted playsInline></video>
                </div>
                <div className="container-aboutsections" style={{ paddingTop: 0 }}>
                    {this.state.isAdmin && window.innerWidth > 768 && <h3 className="add-section-heading" onClick={() => this.setState({ createPopup: true, selectedSectionToCreate: "bottom" })}><font>Add New Section</font></h3>}
                    {this.state.bottomSections.length > 0 && this.state.bottomSections.map((y, i) => {
                        return <div className="content-cas">
                            {window.innerWidth > 768 && this.state.isAdmin && <div className="icons-top-ccas">
                                <div className="inner-icon-tccas" onClick={() => {
                                    this.setState({
                                        editPopup: true, selectedIndexToEdit: i, selectedSectionToEdit: "bottom",
                                        heading1: y.heading1,
                                        heading2: y.heading2,
                                        description: y.description,
                                        buttonLink: y.buttonLink,
                                        buttonText: y.buttonText,
                                        editImageArray: [y.image],
                                    })
                                }}>
                                    <BiEditAlt />
                                </div>
                                <div className="inner-icon-tccas">
                                    <MdDeleteForever onClick={() => {
                                        this.state.bottomSections.splice(i, 1)
                                        firebase.database().ref("bottom_section_inners").set(this.state.bottomSections)
                                    }} />
                                </div>
                            </div>}
                            <div className="left-ccas">
                                <p className="first-heading-ccas">{y.heading1}</p>
                                <p className="second-heading-ccas">{y.heading2}</p>
                                <p className="desc-heading-ccas">{y.description}</p>
                                {y.buttonText && <button onClick={() => {
                                    if (y.buttonLink) {
                                        window.open(
                                            y.buttonLink,
                                            '_blank' // <- This is what makes it open in a new window.
                                        )
                                    }
                                }}>{y.buttonText}</button>}
                            </div>
                            <div className="right-ccas thirdrccas">
                                <img src={y.image} alt="imgright" />
                            </div>
                        </div>
                    })}
                    {/* <div className="content-cas" style={{ paddingTop: 0 }}>
                        <div className="left-ccas">
                            <p className="first-heading-ccas">Upcoming Events</p>
                            <p className="second-heading-ccas">Sign Up for any Upcoming Events!</p>
                            <p className="desc-heading-ccas">Click the link in our footer below to sign up for our newsletter informing of any upcoming physical therapy events near you.</p>
                        </div>
                        <div className="right-ccas">
                            <img src="https://firebasestorage.googleapis.com/v0/b/crystal-signup.appspot.com/o/whitelogo.jpg?alt=media&token=1435d7ee-a13b-46f1-85d1-cf0af3ecd1fe" alt="imgright" />
                        </div>
                    </div> */}
                </div>
                <div className="banner-section-home bottomvideosection">
                    <div className="bgopacitydiv">

                    </div>
                    <video src={footervideo} autoPlay loop muted playsInline></video>
                    <div className="content-bsh">
                        <p>Get back to doing what you love with 2nd To None PT.</p>
                    </div>
                </div>
                <Footer />
                {this.state.createPopup && <div className="create-section-popup">
                    <div className="inner-create-popupsec">
                        <CloseIcon className="close-icon-icps" onClick={() => {
                            this.setState({
                                createPopup: false, selectedSectionToCreate: "",
                                heading1: "",
                                heading2: "",
                                description: "",
                                buttonLink: "",
                                buttonText: "",
                                createImageArray: [],
                                dropFile: [],
                            })
                        }} />
                        <div className="container-icpsec">
                            <div className="fields-icpopup">
                                <input type="text" placeholder="1st Heading" value={this.state.heading1} onChange={(e) => {
                                    this.setState({ heading1: e.target.value })
                                }} />
                                <input type="text" placeholder="2nd Heading" value={this.state.heading2} onChange={(e) => {
                                    this.setState({ heading2: e.target.value })
                                }} />
                                <textarea placeholder="Description Goes here" value={this.state.description} onChange={(e) => {
                                    this.setState({ description: e.target.value })
                                }}>

                                </textarea>
                                <input type="text" placeholder="Button Text" value={this.state.buttonText} onChange={(e) => {
                                    this.setState({ buttonText: e.target.value })
                                }} />
                                <input type="text" placeholder="Button Link" value={this.state.buttonLink} onChange={(e) => {
                                    this.setState({ buttonLink: e.target.value })
                                }} />
                                <input type="file" onChange={(e) => {
                                    e.preventDefault()
                                    let dropFiles = []
                                    if (e.target.files && e.target.files.length > 0) {
                                        let objected = Object.entries(e.target.files)
                                        objected.map((f, i) => {
                                            const reader = new FileReader();
                                            dropFiles.push(objected[i][1])
                                            reader.addEventListener('load', () => {
                                                let img = new Image();
                                                let result = reader.result
                                                img.onload = (e) => {
                                                    let arr = []
                                                    arr.push(result)
                                                    this.setState({ createImageArray: arr, dropFile: dropFiles })
                                                };
                                                img.src = result;
                                            });
                                            reader.readAsDataURL(objected[i][1]);
                                            e.target.value = null
                                        })
                                    }
                                }} />
                                <button onClick={this.createSection.bind(this)}>SAVE</button>
                            </div>
                            <div className="image-icpopup">
                                {this.state.createImageArray.length > 0 && <img src={this.state.createImageArray[0]} />}
                            </div>
                        </div>
                    </div>
                </div>}
                {this.state.editPopup && <div className="create-section-popup">
                    <div className="inner-create-popupsec">
                        <CloseIcon className="close-icon-icps" onClick={() => {
                            this.setState({
                                editPopup: false, selectedIndexToEdit: 0, selectedSectionToEdit: "",
                                heading1: "",
                                heading2: "",
                                description: "",
                                buttonLink: "",
                                buttonText: "",
                                editImageArray: [],
                                dropFileEdit: [],
                            })
                        }} />
                        <div className="container-icpsec">
                            <div className="fields-icpopup">
                                <input type="text" placeholder="1st Heading" value={this.state.heading1} onChange={(e) => {
                                    this.setState({ heading1: e.target.value })
                                }} />
                                <input type="text" placeholder="2nd Heading" value={this.state.heading2} onChange={(e) => {
                                    this.setState({ heading2: e.target.value })
                                }} />
                                <textarea placeholder="Description Goes here" value={this.state.description} onChange={(e) => {
                                    this.setState({ description: e.target.value })
                                }}>

                                </textarea>
                                <input type="text" placeholder="Button Text" value={this.state.buttonText} onChange={(e) => {
                                    this.setState({ buttonText: e.target.value })
                                }} />
                                <input type="text" placeholder="Button Link" value={this.state.buttonLink} onChange={(e) => {
                                    this.setState({ buttonLink: e.target.value })
                                }} />
                                <input type="file" onChange={(e) => {
                                    e.preventDefault()
                                    let dropFiles = []
                                    if (e.target.files && e.target.files.length > 0) {
                                        let objected = Object.entries(e.target.files)
                                        objected.map((f, i) => {
                                            const reader = new FileReader();
                                            dropFiles.push(objected[i][1])
                                            reader.addEventListener('load', () => {
                                                let img = new Image();
                                                let result = reader.result
                                                img.onload = (e) => {
                                                    let arr = []
                                                    arr.push(result)
                                                    this.setState({ editImageArray: arr, dropFileEdit: dropFiles })
                                                };
                                                img.src = result;
                                            });
                                            reader.readAsDataURL(objected[i][1]);
                                            e.target.value = null
                                        })
                                    }
                                }} />
                                <button onClick={this.editSection.bind(this)}>SAVE</button>
                            </div>
                            <div className="image-icpopup">
                                {this.state.editImageArray.length > 0 && <img src={this.state.editImageArray[0]} />}
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}

export default Home
