
function readAcademic(cat, number){
    if (cat == 0){
        db.collection("activities").doc(number).onSnapshot(function(q){
            document.getElementById("aa1").innerText = q.data().name;
        })
    } else if (cat == 1){
        db.collection("activities").doc(number).onSnapshot(function(q){
            document.getElementById("aa2").innerText = q.data().name;
        })
    } else if (cat == 2){
        db.collection("activities").doc(number).onSnapshot(function(q){
            document.getElementById("aa3").innerText = q.data().name;
        })
    }
    
}

function readSocial(cat, number){
    if (cat == 0){
        db.collection("activities").doc(number).onSnapshot(function(q){
            document.getElementById("sa1").innerText = q.data().name;
        })
    } else if (cat == 1){
        db.collection("activities").doc(number).onSnapshot(function(q){
            document.getElementById("sa2").innerText = q.data().name;
        })
    } else if (cat == 2){
        db.collection("activities").doc(number).onSnapshot(function(q){
            document.getElementById("sa3").innerText = q.data().name;
        })
    }
    
}


function academics(c ,n){
    if (n == 1){
        readAcademic(c, "a-1");
    } else if (n == 2) {
        readAcademic(c, "a-2");
    } else if (n == 3) {
        readAcademic(c, "a-3");
    } else if (n == 4) {
        readAcademic(c, "a-r1");
    } else if (n == 5){
        readAcademic(c, "a-r2");
    } else if (n == 6) {
        readAcademic(c, "a-r3");
    }
}

function socials(c, n){
    if (n == 4){
        readSocial(c, "a-4");
    } else if (n == 5){
        readSocial(c, "a-5");
    } else if (n == 6){
        readSocial(c, "a-6");
    }
}

var i;
for (i = 0; i < 3; i++){
    var rand1 = Math.floor((Math.random() * 6) + 1);
    academics(i, rand1);
}

var j;
for (j = 0; j < 3; j++){
    var rand2 = Math.floor((Math.random() * 2) + 4);
    socials(j, rand2);
}
