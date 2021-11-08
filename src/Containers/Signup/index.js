import { useState, useEffect } from "react"
import './index.css';
import logofile from '../../assets/logofile.png'
import firebase from "../../Config/Firebase";
import swal from 'sweetalert';
import emailjs, { init } from 'emailjs-com'

init("user_WIkCNkagQHAGu8FXoV0oX");

function Signup() {
    const [number, setNumber] = useState("")
    const [numberPopup, setNumberPopup] = useState(false)
    const [name, setName] = useState("")
    const [namePopup, setNamePopup] = useState(false)
    const [email, setEmail] = useState("")
    const [emailPopup, setEmailPopup] = useState(false)
    const [emailtooked, setEmailtooked] = useState(false)
    const [allUsers, setallUsers] = useState([])
    const [loader, setLoader] = useState(true)
    const [checkedWaiver, setcheckedWaiver] = useState(false)

    useEffect(() => {
        firebase.database().ref("users").on("value", (data) => {
            let a = data.val()
            console.log(a, '/working')
            let arr = []
            if (a) {
                let objected = Object.entries(a)
                objected.map((t) => {
                    arr.push(t[1])
                })
                setLoader(false)
                setallUsers(arr)
            } else {
                setLoader(false)
                setallUsers([])
            }
        })
    }, [])

    const signupUser = () => {
        let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (email === "" || !regexEmail.test(email)) {
            setEmailPopup(true)
        } else {
            setEmailPopup(false)
        }
        if (number === "" || number.length !== 10) {
            setNumberPopup(true)
        } else {
            setNumberPopup(false)
        }
        if (name === "") {
            setNamePopup(true)
        } else {
            setNamePopup(false)
        }

        let checked = document.getElementById("checkboxtosee").checked
        if (checked) {
            setcheckedWaiver(false)
        } else {
            setcheckedWaiver(true)
        }

        if (name !== "" && email !== "" && regexEmail.test(email) && number !== "" && number.length === 10 && checked) {
            setEmailPopup(false)
            setNumberPopup(false)
            setNamePopup(false)
            let filtered = allUsers.filter((y) => {
                return y.email === email
            })
            if (filtered.length > 0) {
                setEmailtooked(true)
            } else {
                setEmailtooked(false)

                let pushKey = firebase.database().ref("users").push().key
                let obj = {
                    name,
                    email,
                    number,
                    pushKey,
                }
                firebase.database().ref("users/" + pushKey).set(obj).then(() => {
                    emailjs.send("service_xcilzaj", "template_1873axb", {
                        name,
                        email,
                        number,
                    })
                        .then((response) => {
                            swal({
                                title: "Good job!",
                                text: "Signed up successfully!",
                                icon: "success",
                            }).then(() => {
                                setName("")
                                setNumber("")
                                setEmail("")
                                document.getElementById("checkboxtosee").checked = false
                            })
                        }, function (error) {
                            console.log('FAILED...', error);
                        });
                })
            }
        }
    }

    return (
        <div className="main-container-app">
            {loader ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> : allUsers.length > 19 ? <div className="limit-reached-popup">
                <p>Sorry, our bookings are completed :)</p>
            </div> : <div className="inner-container-app">
                <div className="top-icapp">
                    <img src={logofile} className="logo-app" alt="logo-app" />
                    <h2>Sign up</h2>
                </div>
                <div className="bottom-icapp">
                    <div className="form-inner">
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        {namePopup && <p className="red-alert">Name is required</p>}
                    </div>
                    <div className="form-inner">
                        <label>Number</label>
                        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                        {numberPopup && <p className="red-alert">Enter a valid number</p>}
                    </div>
                    <div className="form-inner">
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {emailPopup && <p className="red-alert">Enter a valid email</p>}
                        {emailtooked && <p className="red-alert">Email is already tooked</p>}
                    </div>
                    <div className="form-inner-checkbox">
                        <input type="checkbox" id="checkboxtosee" />
                        <label style={{ color: !checkedWaiver ? "black" : "red" }} onClick={() => {
                            window.open(
                                'https://firebasestorage.googleapis.com/v0/b/crystal-signup.appspot.com/o/liabilitywaiver.pdf?alt=media&token=eec7743e-245a-4539-88f3-97125c8d33c6',
                                '_blank' // <- This is what makes it open in a new window.
                            )
                        }}>Check Waiver</label>
                    </div>
                    <div className="form-inner-button">
                        <button onClick={() => signupUser()}>Submit</button>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Signup;
