var rand1 = Math.floor((Math.random() * 13) + 1);
var rand2 = Math.floor((Math.random() * 13) + 1);
var rand3 = Math.floor((Math.random() * 13) + 1);
var rand4 = Math.floor((Math.random() * 13) + 1);
function readActivity1(number){
    db.collection("interest").doc(number).onSnapshot(function(q){
        document.getElementById("i1").innerText = q.data().category;
    })
}
function readActivity2(number){
    db.collection("interest").doc(number).onSnapshot(function(q){
        document.getElementById("i2").innerText = q.data().category;
    })
}
function readActivity3(number){
    db.collection("interest").doc(number).onSnapshot(function(q){
        document.getElementById("i3").innerText = q.data().category;
    })
}
function readActivity4(number){
    db.collection("interest").doc(number).onSnapshot(function(q){
        document.getElementById("i4").innerText = q.data().category;
    })
}

if (rand1 == 1){
    readActivity1("a1");
} else if (rand1 == 2){
    readActivity1("a2")
} else if (rand1 == 3){
    readActivity1("a3");
} else if (rand1 == 4){
    readActivity1("a4")
} else if (rand1 == 5){
    readActivity1("a5");
} else if (rand1 == 6){
    readActivity1("a6");
} else if (rand1 == 7){
    readActivity1("a7");
} else if (rand1 == 8){
    readActivity1("a8");
} else if (rand1 == 9){
    readActivity1("a9");
} else if (rand1 == 10){
    readActivity1("a10");
} else if (rand1 == 11){
    readActivity1("a11");
} else if (rand1 == 12){
    readActivity1("a12");
} else if (rand1 == 13){
    readActivity1("a13");
}

if (rand2 == 1){
    readActivity2("a1");
} else if (rand2 == 2){
    readActivity2("a2")
} else if (rand2 == 3){
    readActivity2("a3");
} else if (rand2 == 4){
    readActivity2("a4")
} else if (rand2 == 5){
    readActivity2("a5");
} else if (rand2 == 6){
    readActivity2("a6");
} else if (rand2 == 7){
    readActivity2("a7");
} else if (rand2 == 8){
    readActivity2("a8");
} else if (rand2 == 9){
    readActivity2("a9");
} else if (rand2 == 10){
    readActivity2("a10");
} else if (rand2 == 11){
    readActivity2("a11");
} else if (rand2 == 12){
    readActivity2("a12");
} else if (rand2 == 13){
    readActivity2("a13");
}


if (rand3 == 1){
    readActivity3("a1");
} else if (rand3 == 2){
    readActivity3("a2")
} else if (rand3 == 3){
    readActivity3("a3");
} else if (rand3 == 4){
    readActivity3("a4")
} else if (rand3 == 5){
    readActivity3("a5");
} else if (rand3 == 6){
    readActivity3("a6");
} else if (rand3 == 7){
    readActivity3("a7");
} else if (rand3 == 8){
    readActivity3("a8");
} else if (rand3 == 9){
    readActivity3("a9");
} else if (rand3 == 10){
    readActivity3("a10");
} else if (rand3 == 11){
    readActivity3("a11");
} else if (rand3 == 12){
    readActivity3("a12");
} else if (rand3 == 13){
    readActivity3("a13");
}

if (rand4 == 1){
    readActivity4("a1");
} else if (rand4 == 2){
    readActivity4("a2")
} else if (rand4 == 3){
    readActivity4("a3");
} else if (rand4 == 4){
    readActivity4("a4")
} else if (rand4 == 5){
    readActivity4("a5");
} else if (rand4 == 6){
    readActivity4("a6");
} else if (rand4 == 7){
    readActivity4("a7");
} else if (rand4 == 8){
    readActivity4("a8");
} else if (rand4 == 9){
    readActivity4("a9");
} else if (rand4 == 10){
    readActivity4("a10");
} else if (rand4 == 11){
    readActivity4("a11");
} else if (rand4 == 12){
    readActivity4("a12");
} else if (rand4 == 13){
    readActivity4("a13");
}