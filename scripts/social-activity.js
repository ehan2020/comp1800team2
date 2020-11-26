function readSocialRoom1(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("room1").innerText = "Room " + q.data().Room + " - " + q.data().Name;
    })
}

function readSocialRoom2(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("room2").innerText = "Room " + q.data().Room + " - " + q.data().Name;
    })
}

function readSocialRoom3(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("room3").innerText = "Room " + q.data().Room + " - " + q.data().Name;
    })
}

function readSocialRoom4(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("room4").innerText = "Room " + q.data().Room + " - " + q.data().Name;
    })
}

function readSocialRoom5(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("room5").innerText = "Room " + q.data().Room + " - " + q.data().Name;
    })
}

function readSocialRoom6(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("room6").innerText = "Room " + q.data().Room + " - " + q.data().Name;
    })
}

function readSocialContent1(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("active-content1").innerText = q.data().Description;
    })
}

function readSocialContent2(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("active-content2").innerText = q.data().Description;
    })
}

function readSocialContent3(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("active-content3").innerText = q.data().Description;
    })
}

function readSocialContent4(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("active-content4").innerText = q.data().Description;
    })
}

function readSocialContent5(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("active-content5").innerText = q.data().Description;
    })
}

function readSocialContent6(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("active-content6").innerText = q.data().Description;
    })
}


readSocialRoom1("s-r1");
readSocialRoom2("s-r2");
readSocialRoom3("s-r3");
readSocialRoom4("s-r4");
readSocialRoom5("s-r5");
readSocialRoom6("s-r6");

readSocialContent1("s-r1");
readSocialContent2("s-r2");
readSocialContent3("s-r3");
readSocialContent4("s-r4");
readSocialContent5("s-r5");
readSocialContent6("s-r6");