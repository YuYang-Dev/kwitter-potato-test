// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWLbBRZ9rUpti-Nl69zlaiGhX9IslzF3U",
  authDomain: "kwitter-f23ab.firebaseapp.com",
  databaseURL: "https://kwitter-f23ab-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kwitter-f23ab",
  storageBucket: "kwitter-f23ab.appspot.com",
  messagingSenderId: "1093389117448",
  appId: "1:1093389117448:web:b34f383bca026306c409bd",
  measurementId: "G-6DW1Z6Y2TT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome, " + user_name + "!"; // welcome potato

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function AddRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update
  ({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html"; // potato :)
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
