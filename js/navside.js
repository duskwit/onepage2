/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById('openIcon').style.display = "none";
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.height = "100vh";
    document.getElementById("main").style.width = "0";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById('openIcon').style.display = "block";
}