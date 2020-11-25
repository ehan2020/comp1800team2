function readAcademic1(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("room1").innerText = "Room" + q.data().Room + "- " + q.data().name;
    })
}

function readAcademic2(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("room2").innerText = "Room" + q.data().Room + "- " + q.data().name;
    })
}

function readAcademic3(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("room3").innerText = "Room" + q.data().Room + "- " + q.data().name;
    })
}

readAcademic1("a-r1");
readAcademic2("a-r2");
readAcademic3("a-r3");