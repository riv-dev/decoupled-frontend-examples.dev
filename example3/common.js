var xmlhttp;

if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
    // code for older browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var users = JSON.parse(this.responseText);
        
        var usersList = document.getElementById("users");

        for(var i=0;i<users.length;i++) {
            var list_item = document.createElement("li");
            list_item.innerHTML = "<strong>" + users[i].firstname + " " + users[i].lastname + "</strong>: " + users[i].title + " (<em>email: " + users[i].email + "</em>)";
            usersList.appendChild(list_item);
        }
    }
};

xmlhttp.open("GET", "http://localhost:3000/api/users", true);
xmlhttp.send();