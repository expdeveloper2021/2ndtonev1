import React, { Component } from 'react'
import Footer from '../../Components/Footer'
import { GiHamburgerMenu } from 'react-icons/gi'
import CloseIcon from '@mui/icons-material/Close';
import logofile from '../../assets/logofile.png'
import bannervideo from '../../assets/surfing.mp4'
import './index.css'

export class InsurancePolicy extends Component {

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
                                window.location.href = "/"
                            }} />
                        </div>
                        <div className={`mid-navbar ${this.state.popupOpen ? "popupopen" : ""}`}>
                            {window.innerWidth < 1200 && <CloseIcon style={{ color: "white", fontSize: 38 }} onClick={() => this.setState({ popupOpen: false })} />}
                            <ul>
                                <li>
                                    <a href="/" onClick={() => {
                                        this.setState({ homeActive: true, aboutActive: false, testimonialsActive: false, missionActive: false, hiwActive: false, popupOpen: false })
                                    }}>Home</a>
                                </li>
                                <li>
                                    <a href="#about" onClick={() => {
                                        this.setState({ homeActive: false, aboutActive: true, testimonialsActive: false, missionActive: false, hiwActive: false, popupOpen: false })
                                    }}>About 2nd to None</a>
                                </li>
                                <li>
                                    <a href="#testimonials" onClick={() => {
                                        this.setState({ homeActive: false, aboutActive: false, testimonialsActive: true, missionActive: false, hiwActive: false, popupOpen: false })
                                    }}>Testimonials</a>
                                </li>
                                <li>
                                    <a href="#mission" onClick={() => {
                                        this.setState({ homeActive: false, aboutActive: false, testimonialsActive: false, missionActive: true, hiwActive: false, popupOpen: false })
                                    }}>Our Mission</a>
                                </li>
                                <li>
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
                <div className="insurance-container-stuff">
                    <p className="main-insurancecs">WHY WE DON'T ACCEPT INSURANCE</p>
                    <p className="heading-insurancecs">2nd to None PT Policy:</p>
                    <p className="desc-insurancecs">
                        You have good reason to be hesitant to go to an out-of-network Physical Therapist, especially since you pay good money for your health insurance. The gist of it is, when you go in-network, the clinic provides their PT’s with productivity standards. What does that mean for you and the PT? For you, it means that during your initial evaluation the PT will more than likely only have about 20-30 minutes to provide you with a thorough evaluation. After that, you’re handed off to a licensed PT Assistant (PTA) or a PT tech/aide. A PTA does have formal schooling, but is not able to diagnose, evaluate or discharge you at all. A PT tech/aide, more often than not, does not have ANY formal training and is kind of considering becoming a PT, but maybe not. And even then, if your PT becomes busy, there’s a change in schedule, etc. they may not even end up working with you throughout your entire plan of care. This tends to be frustrating and an inconvenience. For the PT, it means that they have to truly trust the person they are handing their patient over to. But, as previously mentioned, it is hard to fully trust a PT tech/aide who does not have any formal training in exercises and their intention with the exercises. To make things even more frustrating, the PTs are encouraged to keep the patient at least one hour so they can bill the insurance company a certain amount of “units” (medical term used for what insurances reimburse for over a period of time). How do they keep you for an hour? They have you sit around for 10-15 minutes with Ice, Heat, E-Stim or a combination of the three. All three of these passive interventions have very low carry-over into the success of your plan of care. Furthermore, that PT has anywhere from 13-20 patients they need to see each day in order to meet the clinic productivity standard. Lastly, the insurance companies continue to cut reimbursement rates. In 2021, Medicare has proposed an additional 8% cut to reimbursements. And if Medicare cuts rates, most other insurance companies follow suit. Again, further straining the outpatient clinic by making them increase the number of patients seen by each PT on a daily basis in order to meet productivity standards. At 2nd to None PT, we don’t have any of the aforementioned issues. Plus, since we don’t deal with insurance, we don’t have some non-medical personnel at Kaiser telling us how many times you’re authorized to see us, how much time we can spend with you per visit or whether or not the services will be covered at all. We provide you with a super bill (aka an invoice of your treatment) at the end of each visit that you can submit to your insurance provider. If you have met your deductible for the year, you get reimbursed a certain amount (usually between 50-80% of your visit). If you don’t, you still get better quality of service than going to an in-network provider.
                    </p>
                </div>
                <div className="banner-section-home" style={{ marginTop: 0 }}>
                    <div className="overlay-bsh-main">

                    </div>
                    <video src={bannervideo} autoPlay loop muted playsInline></video>
                </div>
                <Footer />
            </div>
        )
    }
}

export default InsurancePolicy
