function readAcademicRoom1(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("room1").innerText = "Room " + q.data().Room + " - " + q.data().name;
    })
}

function readAcademicRoom2(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("room2").innerText = "Room " + q.data().Room + " - " + q.data().name;
    })
}

function readAcademicRoom3(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("room3").innerText = "Room " + q.data().Room + " - " + q.data().name;
    })
}

function readAcademicRoom4(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("room4").innerText = "Room " + q.data().Room + " - " + q.data().name;
    })
}

function readAcademicRoom5(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("room5").innerText = "Room " + q.data().Room + " - " + q.data().name;
    })
}

function readAcademicRoom6(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("room6").innerText = "Room " + q.data().Room + " - " + q.data().name;
    })
}

function readAcademicContent1(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("active-content1").innerText = q.data().Description;
    })
}

function readAcademicContent2(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("active-content2").innerText = q.data().Description;
    })
}

function readAcademicContent3(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("active-content3").innerText = q.data().Description;
    })
}

function readAcademicContent4(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("active-content4").innerText = q.data().Description;
    })
}

function readAcademicContent5(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("active-content5").innerText = q.data().Description;
    })
}

function readAcademicContent6(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("active-content6").innerText = q.data().Description;
    })
}


readAcademicRoom1("a-r1");
readAcademicRoom2("a-r2");
readAcademicRoom3("a-r3");
readAcademicRoom4("a-r4");
readAcademicRoom5("a-r5");
readAcademicRoom6("a-r6");
readAcademicContent1("a-r1");
readAcademicContent2("a-r2");
readAcademicContent3("a-r3");
readAcademicContent4("a-r4");
readAcademicContent5("a-r5");
readAcademicContent6("a-r6");