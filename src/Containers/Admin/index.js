import { useState, useEffect } from "react"
import './index.css';
import logofile from '../../assets/logofile.png'
import firebase from "../../Config/Firebase";
import swal from 'sweetalert';
import { MdDeleteForever } from "react-icons/md";

function Admin() {
    const [allUsers, setallUsers] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        let popupValue = prompt("Enter admin key")
        let promise = new Promise((res, rej) => {
            firebase.database().ref("admin_key").on("value", (data) => {
                let a = data.val()
                if (a === popupValue) {
                    res()
                } else {
                    swal({
                        title: "Sorry!",
                        text: "Your credentials are wrong!",
                        icon: "error",
                    }).then(() => {
                        window.location.href = "/"
                    })
                }
            })
        })

        promise.then(() => {
            firebase.database().ref("users").on("value", (data) => {
                let a = data.val()
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
        })
    }, [])

    return (
        <div className="main-container-app" style={{ padding: "60px 0px" }}>
            {loader ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> : <div className="inner-container-users-list">
                <div style={{ width: "100%", textAlign: "center" }}>
                    <img src={logofile} className="logo-app" alt="logo-app" />
                </div>
                <div className="container-users-list">
                    <div>
                        <p>Name</p>
                    </div>
                    <div>
                        <p>Number</p>
                    </div>
                    <div>
                        <p>Email</p>
                    </div>
                    <div>
                        <p>Actions</p>
                    </div>
                </div>
                {allUsers.length > 0 && allUsers.map((t) => {
                    return <div className="container-users-list">
                        <div>
                            <p>{t.name}</p>
                        </div>
                        <div>
                            <p>{t.number}</p>
                        </div>
                        <div>
                            <p>{t.email}</p>
                        </div>
                        <div>
                            <div className="delete-icon-main" onClick={() => {
                                firebase.database().ref("users/" + t.pushKey).remove()
                            }}>
                                <MdDeleteForever />
                            </div>
                        </div>
                    </div>
                })}
            </div>}
        </div>
    );
}

export default Admin;
