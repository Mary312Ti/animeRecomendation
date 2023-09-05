const firebase = require("nativescript-plugin-firebase");
const firebaseConfig = require("./firebase-config");

firebase.init(firebaseConfig).then(() => {
  console.log("Firebase initialized!");
});
