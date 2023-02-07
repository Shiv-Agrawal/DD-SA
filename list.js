function load() {
    user_name = localStorage.getItem("kwitter_Name");
    if (user_name == null) {
        alert("Please login with a name to continue.");
        window.location = "username.html";
    } else {
        document.getElementById("welcome").innerHTML = "Hello, " + user_name + "!";
    }
}

function redirectToRoom(name) {
    console.log(name);
    room_name = name;
    localStorage.setItem("kwitter_room", name);
    window.location = "chat.html";
}
function logOut() {
    localStorage.removeItem("kwitter_room");
    localStorage.removeItem("kwitter_Name");
    window.location = "username.html";
}

