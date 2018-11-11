const rebase = require('re-base');
const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyAPtosKoZ4dFhuQWl2aWQMDC8_s8KLGGFE",
    authDomain: "engapp-website-reactjs.firebaseapp.com",
    databaseURL: "https://engapp-website-reactjs.firebaseio.com",
    projectId: "engapp-website-reactjs",
    storageBucket: "engapp-website-reactjs.appspot.com",
    messagingSenderId: "636490011771"
};

const app = firebase.initializeApp(firebaseConfig);

const config = rebase.creatClass(app.database());

export default config;
