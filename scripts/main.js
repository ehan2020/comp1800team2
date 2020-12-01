function readUser(number){
    db.collection("users").doc(number).onSnapshot(function(q){
        document.getElementById("welcome-msg").innerText = "Welcome " + q.data().name;
    })
}

readUser("users");