var firebaseConfig = {
    apiKey: "AIzaSyB1IPYHr1L60VAoyN5o12RYhbcqpSON7G0",
    authDomain: "hogwarts2021-7f22a.firebaseapp.com",
    databaseURL: "https://hogwarts2021-7f22a-default-rtdb.firebaseio.com",
    projectId: "hogwarts2021-7f22a",
    storageBucket: "hogwarts2021-7f22a.appspot.com",
    messagingSenderId: "55432892623",
    appId: "1:55432892623:web:f4c5373f7606fb77ce67ba",
    measurementId: "G-7LP8GJ5V1T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
username= localStorage.getItem("User_Name")
roomname= localStorage.getItem("rn")
function Send(){
    input_msg= document.getElementById("Msg").value
    firebase.database().ref(roomname).push({
          name: username,
          message: input_msg,
          like:0
    })     
    document.getElementById("Msg").value= ""
}
function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code

                      //End code
                }
          });
    });
}
getData();