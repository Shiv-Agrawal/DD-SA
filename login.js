function load() {
    if (screen.height < 567) {
        document.body.style.overflow = "none";
    }
    else {
        document.body.style.overflow = "hidden";
    }
}
function login() {
    namename = document.getElementById("nameInput").value;
    localStorage.setItem("kwitter_Name", namename);
    window.location = "list.html";
}
