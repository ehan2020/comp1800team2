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

//----------------------------------------------------------------------
//  This function populates the slots identified by "c1", "c2" etc.
//  with a bootrap card with information from the collection
//  Inserts a little heart beside restaurant name. 
//----------------------------------------------------------------------
function fillCards(mycollection) {
    db.collection(mycollection)
        .get()
        .then(function (snap) {

            snap.forEach(function (doc) {
                console.log(doc.data());
                var image = doc.data().image;

                //The following line adds the content for bootstrap card
                var d1 = $("#card").append(
                    "<div class='card' style='width: 18rem;'>" +
                    "<img class='card-img-top' src='images/" + image + "' alt='Card image cap'>" +
                    "<div class='card-body'>" +
                    "<h5 class='card-title'>" + name +
                    "</h5>" +
                    "<a href='#' class='btn btn-primary'>Go somewhere</a>" +
                    "</div)" +
                    "</div>" +
                    "</div)");
            })
        })
}
fillCards("rooms");


function sendMessage(){
    document.getElementById
}