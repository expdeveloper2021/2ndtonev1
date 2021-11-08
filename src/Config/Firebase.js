import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAmu_tX7m7JKQ4Rfll9BdI152pMYYeiEyQ",
    authDomain: "crystal-signup.firebaseapp.com",
    databaseURL: "https://crystal-signup-default-rtdb.firebaseio.com",
    projectId: "crystal-signup",
    storageBucket: "crystal-signup.appspot.com",
    messagingSenderId: "980165136485",
    appId: "1:980165136485:web:265f9727bc8f7b2649f68c"
};

firebase.initializeApp(firebaseConfig);

export default firebase