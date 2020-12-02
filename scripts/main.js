function getUser(){
    firebase.auth().onAuthStateChanged(function (user) {
        if (user){
            console.log ("user is signed in");
            db.collection("users")
            .doc(user.uid)
            .get()
            .then(function(doc){
                var n = doc.data().name;
                console.log(n);
                $("#username").text(n);
            })
        }
        else {
            console.log ("no user is signed in");
        }
    })
}
getUser();

function sendMessage(){
    document.getElementById("sendButton").addEventListener('click', function () {
        var message = document.getElementById("exampleFormControlTextarea1").value;
        console.log(message);

        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("users").doc(user.uid)
            .update({
                "exampleFormControlTextarea1": message
            })
        })
    })
}
sendMessage();