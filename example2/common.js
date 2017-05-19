var xmlhttp;

if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
    // code for older browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("users").innerHTML =
            this.responseText;
    }
};

xmlhttp.open("GET", "http://localhost:3000/api/users", true);
xmlhttp.send();