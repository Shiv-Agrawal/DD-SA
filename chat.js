const firebaseConfig = {
    apiKey: "AIzaSyDC_pBHM_4UEVO5d1NrsZwsoSlnqpjR5eY",
    authDomain: "dd-sa-cba60.firebaseapp.com",
    databaseURL: "https://dd-sa-cba60-default-rtdb.firebaseio.com",
    projectId: "dd-sa-cba60",
    storageBucket: "dd-sa-cba60.appspot.com",
    messagingSenderId: "442662486373",
    appId: "1:442662486373:web:d31855e6f3ad78a1d4e18c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("kwitter_Name");
room_name = localStorage.getItem("kwitter_room");
function load() {
    if (user_name == null) {
        alert("Please Login to Continue");
        window.location = "username.html";
    } else if (room_name == null) {
        alert("There was some error.");
        window.location = "list.html";
    }
}
function back() {
    localStorage.removeItem("kwitter_room");
    window.location = "list.html";
}
function logOut() {
    localStorage.removeItem("kwitter_room");
    localStorage.removeItem("kwitter_Name");
    window.location = "username.html";
}
function send() {
    msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        Name: user_name,
        message: msg,
        likes: 0
    });
    document.getElementById("message").value = "";
}
function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                nam = message_data["Name"];
                Message = message_data["message"];

                name_tag = "<h4><b>" + nam + "</b></h4>";
                message_tag = "<h4 message_h4>" + Message + "</h4><hr>";

                row = name_tag + message_tag;
                document.getElementById("output").innerHTML += row;
            }
        });
    });
}
getData();
