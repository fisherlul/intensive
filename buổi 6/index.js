  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { collection, doc, setDoc, addDoc, getDocs, getDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAtBO5m4H35Ra87Pscman1f34PoBmuF560",
    authDomain: "jsi04b.firebaseapp.com",
    projectId: "jsi04b",
    storageBucket: "jsi04b.appspot.com",
    messagingSenderId: "220719342453",
    appId: "1:220719342453:web:d1dad7dc4447ad3acfa93c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// connect to collection
  const db = getFirestore();

// get all data 
  let getData = async () => {
      let ref = await doc (db, "information", "information")
      let data = await getDoc(ref)
      console.log(data.data())
  };
  getData()

  let arrayDataTemp = new Array()

let getAllData = async () => {
    const arrayData = await getDocs(collection(db, "information"))
    arrayData.forEach(item=> {
        console.log(item.id, "-> data", item.data());
    });
}
getAllData();

// console.log(arrayDataTemp);

let addDocCustomID = async () => {
    let ref = await doc (db, "information");
    await setDoc(ref,{
        Name:"Huy",
        Age:"16 tuổi",
        Class:"10d4",
        Year:"2020"
    }).then((result) => {
        console.log("Thêm thành công");
    }).catch((err) => {
        console.log(err);
    })
}