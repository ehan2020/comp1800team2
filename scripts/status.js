function readStatus(ids) {
    var rand = Math.floor((Math.random() * 2) + 1);
    if (rand == 1) {
        db.collection("status").doc("offline").onSnapshot(function(q){
            document.getElementById(ids).innerText = q.data().info;
        })
    } else if (rand == 2){
        db.collection("status").doc("online").onSnapshot(function(q){
            document.getElementById(ids).innerText = q.data().info;
        })
    }
}

readStatus("info1");
readStatus("info2");
readStatus("info3");
readStatus("info4");
readStatus("info5");
readStatus("info6");
