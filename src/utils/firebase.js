import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCrrJOz8OcIrVFy5YCVMk060ORNIVdqvdQ",
  authDomain: "fir-crud-ae1f5.firebaseapp.com",
  projectId: "fir-crud-ae1f5",
  storageBucket: "fir-crud-ae1f5.appspot.com",
  messagingSenderId: "471075071849",
  appId: "1:471075071849:web:563e49c7f222afcc29fff8",
  measurementId: "G-K6N7MTQ65M",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
