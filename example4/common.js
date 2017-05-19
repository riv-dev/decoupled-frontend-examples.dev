$.get("http://localhost:3000/api/users", function(data, status){
     var users = data;
     for(var i=0;i<users.length;i++) {
        $("#users").append("<li><strong>" + users[i].firstname + " " + users[i].lastname + "</strong>: " + users[i].title + " (<em>email: " + users[i].email + "</em>)</li>");
     }
});