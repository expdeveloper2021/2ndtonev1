import React, { Component } from 'react'
import imgthird from '../../assets/whitelogo.jpg'
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
import CloseIcon from '@mui/icons-material/Close';
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
                        <p>Tired of fearing pain? Tired of not being able to do the things you love? Tired of missing out on life? 2nd to None Physical Therapy provides top of the line hysical therapy, Sports Rehabilitation and Strength & Conditioning.</p>
                        <div className="buttoncontainer-bsh">
                            <button>Get Started <BiChevronRight /></button>
                        </div>
                    </div>
                </div>
                <div className="container-aboutsections" id="about" style={{ paddingBottom: 0 }}>
                    <div className="content-cas">
                        <div className="left-ccas">
                            <p className="first-heading-ccas">WHO ARE WE?</p>
                            <p className="second-heading-ccas">2nd To None PT</p>
                            <p className="desc-heading-ccas">Dr. Rick Chavez is a SoCal native and a U.S. Army Veteran. He has played all different types of sports throughout his life and has been performing strength and conditioning for the last 10 years of his life. As a Physical Therapist, Dr. Rick understands how to manage symptoms and prescribe therapeutic exercises to alleviate pain. As a Certified Strength and Conditioning Specialist (CSCS), Dr. Rick can help propel your physical and mental toughness to the next level!</p>
                        </div>
                        <div className="right-ccas firstrccas">
                            {/* <img src="https://firebasestorage.googleapis.com/v0/b/crystal-signup.appspot.com/o/1.jpg?alt=media&token=d1973cbb-df7d-4141-942b-0aaf4c272c22" alt="imgright" /> */}
                        </div>
                    </div>
                    <div className="content-cas">
                        <div className="left-ccas">
                            <p className="first-heading-ccas">2ND TO NONE PT | SAN MARCOS, CA</p>
                            <p className="second-heading-ccas">Why Us?</p>
                            <p className="desc-heading-ccas">As an avid thrill-seeker, Dr. Rick knows what it takes to perform at a high-level when playing a multitude of sports such as: soccer, mountain biking, Olympic weightlifting, snowboarding, CrossFit, skateboarding, sprinting, football, etc. Plus, Dr. Rick will be the only healthcare professional managing your plan of care and he will be with you throughout every minute of your treatment</p>
                        </div>
                        <div className="right-ccas secondrccas">
                            {/* <img src="https://firebasestorage.googleapis.com/v0/b/crystal-signup.appspot.com/o/6.jpg?alt=media&token=ce64b86c-d6f7-4655-89a9-f363999f1f01" alt="imgright" /> */}
                        </div>
                    </div>
                </div>
                <div className="black-section-fullwidth" style={{ marginBottom: 0 }}>
                    <div className="container-aboutsections">
                        <div className="content-cas" id="testimonials">
                            <div className="left-ccas">
                                <p className="first-heading-ccas">TESTIMONIALS</p>
                                <p className="second-heading-ccas">Brenda S. of Los Angeles, CA | Yelp Review</p>
                                <p className="desc-heading-ccas">Dr. Rick Chavez is AMAZING! Had major back pain with having a baby last year and after just one visit felt a whole lot better! Will definitely be visiting more often. He's very knowledgeable and made everything super comfortable! Thanks again!</p>
                            </div>
                            <div className="right-ccas">
                                <img src={imgthird} alt="imgright" />
                            </div>
                        </div>
                        <div className="content-cas">
                            <div className="left-ccas">
                                <p className="first-heading-ccas">YELP REVIEW</p>
                                <p className="second-heading-ccas">Cade L. of San Diego, CA | Yelp Review</p>
                                <p className="desc-heading-ccas">Excellent PT with a focus on results, and patient safety. If I could give more than 5-stars, I absolutely would! Anyone dealing with chronic pain, or lingering injuries, would be well off to give Dr Rick a call!</p>
                            </div>
                            <div className="right-ccas thirdrccas">
                                {/* <img src="https://firebasestorage.googleapis.com/v0/b/crystal-signup.appspot.com/o/7.jpg?alt=media&token=c6a9f480-21f0-44c0-8229-db4eb36724f5" alt="imgright" /> */}
                            </div>
                        </div>
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
                                <img src="https://firebasestorage.googleapis.com/v0/b/crystal-signup.appspot.com/o/8.jpg?alt=media&token=d78d7027-40ec-47a5-9b78-3d1c45408584" alt="imgright" />
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
                    <div className="content-cas" style={{ paddingTop: 0 }}>
                        <div className="left-ccas">
                            <p className="first-heading-ccas">Upcoming Events</p>
                            <p className="second-heading-ccas">Sign Up for any Upcoming Events!</p>
                            <p className="desc-heading-ccas">Click the link in our footer below to sign up for our newsletter informing of any upcoming physical therapy events near you.</p>
                        </div>
                        <div className="right-ccas">
                            <img src={imgthird} alt="imgright" />
                        </div>
                    </div>
                    {/* <div className="content-cas">
                        <div className="left-ccas">
                            <p className="first-heading-ccas">SELF SCHEDULING</p>
                            <p className="second-heading-ccas">Online Booking has never been so Quick & Easy</p>
                            <p className="desc-heading-ccas">Are you ready to begin your pain free, active lifestyle? With self-scheduling, book an appointment anytime, anywhere. With 2nd To None Physical Therapy, know care fits around your schedule.</p>
                        </div>
                        <div className="right-ccas selfrccas">
                        </div>
                    </div>
                    <div className="content-cas">
                        <div className="left-ccas">
                            <p className="first-heading-ccas">MORE ABOUT DR. RICK</p>
                            <p className="second-heading-ccas">2nd To None Physical Therapy | San Diego, CA</p>
                            <p className="desc-heading-ccas">Rick Chavez is a successful and highly regarded clinician, U.S. Army Veteran and a southern California native. He and his wife, Rebeca, work together to help people get out of pain, find out why they are in pain and to educate them on how to keep the pain away for good! Dr. Rick lives a life that is both humble and fulfilling. He worships God daily, enjoys working with his wife and awesome patients and has the time freedom to enjoy those great relationships in the great outdoors of southern California. Rick learned a lot about selfless service during his time in the U.S. Army. Rick recently attained his Certified Strength and Conditioning Specialist (CSCS) so that he may provide more in-depth knowledge during his treatments. He continues to give back his knowledge, time and skills so that others may have greater opportunities and live a more fulfilling life.</p>
                        </div>
                        <div className="right-ccas aboutrccas">
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
                {/* <div className="footer-bottom-main">
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
                            <button>Why We Don't Accept Insurance</button>
                            <p>Interest-Based Copyright&copy; 2022, 2ndtonone.com, and its affiliates.</p>
                        </div>
                    </div>
                </div> */}
                <Footer />
            </div>
        )
    }
}

export default Home
