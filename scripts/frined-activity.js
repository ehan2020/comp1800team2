var rand1 = Math.floor((Math.random() * 9) + 1);
var rand2 = Math.floor((Math.random() * 9) + 1);
var rand3 = Math.floor((Math.random() * 9) + 1);
var rand4 = Math.floor((Math.random() * 9) + 1);
var rand5 = Math.floor((Math.random() * 9) + 1);


function readActivity1(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("a1").innerText = q.data().name;
    })
}
function readActivity2(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("a2").innerText = q.data().name;
    })
}
function readActivity3(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("a3").innerText = q.data().name;
    })
}
function readActivity4(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("a4").innerText = q.data().name;
    })
}

function readActivity5(number){
    db.collection("activities").doc(number).onSnapshot(function(q){
        document.getElementById("a5").innerText = q.data().name;
    })
}

if (rand1 == 1){
    readActivity1("a-1");
} else if (rand1 == 2){
    readActivity1("a-2")
} else if (rand1 == 3){
    readActivity1("a-3");
} else if (rand1 == 4){
    readActivity1("a-4")
} else if (rand1 == 5){
    readActivity1("a-5");
} else if (rand1 == 6){
    readActivity1("a-r1");
} else if (rand1 == 7){
    readActivity1("a-r2");
} else if (rand1 == 8) {
    readActivity1("a-r3")
} else if (rand1 == 9) {
    readActivity1(a-6);
}

if (rand2 == 1){
    readActivity2("a-1");
} else if (rand2 == 2){
    readActivity2("a-2")
} else if (rand2 == 3){
    readActivity2("a-3");
} else if (rand2 == 4){
    readActivity2("a-4")
} else if (rand2 == 5){
    readActivity2("a-5");
} else if (rand2 == 6){
    readActivity2("a-r1");
} else if (rand2 == 7){
    readActivity2("a-r2");
} else if (rand2 == 8) {
    readActivity2("a-r3")
} else if (rand2 == 9) {
    readActivity2(a-6);
}

if (rand3 == 1){
    readActivity3("a-1");
} else if (rand3 == 2){
    readActivity3("a-2")
} else if (rand3 == 3){
    readActivity3("a-3");
} else if (rand3 == 4){
    readActivity3("a-4")
} else if (rand3 == 5){
    readActivity3("a-5");
} else if (rand3 == 6){
    readActivity3("a-r1");
} else if (rand3 == 7){
    readActivity3("a-r2");
} else if (rand3 == 8) {
    readActivity3("a-r3")
} else if (rand3 == 9) {
    readActivity3(a-6);
}

if (rand4 == 1){
    readActivity4("a-1");
} else if (rand4 == 2){
    readActivity4("a-2")
} else if (rand4 == 3){
    readActivity4("a-3");
} else if (rand4 == 4){
    readActivity4("a-4")
} else if (rand4 == 5){
    readActivity4("a-5");
} else if (rand4 == 6){
    readActivity4("a-r1");
} else if (rand4 == 7){
    readActivity4("a-r2");
} else if (rand4 == 8) {
    readActivity4("a-r3")
} else if (rand4 == 9) {
    readActivity4(a-6);
}

if (rand5 == 1){
    readActivity5("a-1");
} else if (rand5 == 2){
    readActivity5("a-2")
} else if (rand5 == 3){
    readActivity5("a-3");
} else if (rand5 == 4){
    readActivity5("a-4")
} else if (rand5 == 5){
    readActivity5("a-5");
} else if (rand5 == 6){
    readActivity5("a-r1");
} else if (rand5 == 7){
    readActivity5("a-r2");
} else if (rand5 == 8) {
    readActivity5("a-r3")
} else if (rand5 == 9) {
    readActivity5(a-6);
}
