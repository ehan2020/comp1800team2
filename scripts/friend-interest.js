var rand1 = Math.floor((Math.random() * 13) + 1);
var rand2 = Math.floor((Math.random() * 13) + 1);
var rand3 = Math.floor((Math.random() * 13) + 1);
var rand4 = Math.floor((Math.random() * 13) + 1);


function readInterest1(number){
    db.collection("interest").doc(number).onSnapshot(function(q){
        document.getElementById("i1").innerText = q.data().category;
    })
}
function readInterest2(number){
    db.collection("interest").doc(number).onSnapshot(function(q){
        document.getElementById("i2").innerText = q.data().category;
    })
}
function readInterest3(number){
    db.collection("interest").doc(number).onSnapshot(function(q){
        document.getElementById("i3").innerText = q.data().category;
    })
}
function readInterest4(number){
    db.collection("interest").doc(number).onSnapshot(function(q){
        document.getElementById("i4").innerText = q.data().category;
    })
}


if (rand1 == 1){
    readInterest1("a1");
} else if (rand1 == 2){
    readInterest1("a2")
} else if (rand1 == 3){
    readInterest1("a3");
} else if (rand1 == 4){
    readInterest1("a4")
} else if (rand1 == 5){
    readInterest1("a5");
} else if (rand1 == 6){
    readInterest1("a6");
} else if (rand1 == 7){
    readInterest1("a7");
} else if (rand1 == 8){
    readInterest1("a8");
} else if (rand1 == 9){
    readInterest1("a9");
} else if (rand1 == 10){
    readInterest1("a10");
} else if (rand1 == 11){
    readInterest1("a11");
} else if (rand1 == 12){
    readInterest1("a12");
} else if (rand1 == 13){
    readInterest1("a13");
}

if (rand2 == 1){
    readInterest2("a1");
} else if (rand2 == 2){
    readInterest2("a2")
} else if (rand2 == 3){
    readInterest2("a3");
} else if (rand2 == 4){
    readInterest2("a4")
} else if (rand2 == 5){
    readInterest2("a5");
} else if (rand2 == 6){
    readInterest2("a6");
} else if (rand2 == 7){
    readInterest2("a7");
} else if (rand2 == 8){
    readInterest2("a8");
} else if (rand2 == 9){
    readInterest2("a9");
} else if (rand2 == 10){
    readInterest2("a10");
} else if (rand2 == 11){
    readInterest2("a11");
} else if (rand2 == 12){
    readInterest2("a12");
} else if (rand2 == 13){
    readInterest2("a13");
}


if (rand3 == 1){
    readInterest3("a1");
} else if (rand3 == 2){
    readInterest3("a2")
} else if (rand3 == 3){
    readInterest3("a3");
} else if (rand3 == 4){
    readInterest3("a4")
} else if (rand3 == 5){
    readInterest3("a5");
} else if (rand3 == 6){
    readInterest3("a6");
} else if (rand3 == 7){
    readInterest3("a7");
} else if (rand3 == 8){
    readInterest3("a8");
} else if (rand3 == 9){
    readInterest3("a9");
} else if (rand3 == 10){
    readInterest3("a10");
} else if (rand3 == 11){
    readInterest3("a11");
} else if (rand3 == 12){
    readInterest3("a12");
} else if (rand3 == 13){
    readInterest3("a13");
}

if (rand4 == 1){
    readInterest4("a1");
} else if (rand4 == 2){
    readInterest4("a2")
} else if (rand4 == 3){
    readInterest4("a3");
} else if (rand4 == 4){
    readInterest4("a4")
} else if (rand4 == 5){
    readInterest4("a5");
} else if (rand4 == 6){
    readInterest4("a6");
} else if (rand4 == 7){
    readInterest4("a7");
} else if (rand4 == 8){
    readInterest4("a8");
} else if (rand4 == 9){
    readInterest4("a9");
} else if (rand4 == 10){
    readInterest4("a10");
} else if (rand4 == 11){
    readInterest4("a11");
} else if (rand4 == 12){
    readInterest4("a12");
} else if (rand4 == 13){
    readInterest4("a13");
}