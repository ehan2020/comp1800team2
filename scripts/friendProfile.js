function readFriendName(names){
    db.collection("friends").doc(names).onSnapshot(function(q){
        document.getElementById("name").innerText = q.data().name;
    })
}
function readFriendId(ids){
    db.collection("friends").doc(names).onSnapshot(function(q){
        document.getElementById("id").innerText = q.data().id;
    })
}

function readFriendParent(parents){
    db.collection("friends").doc(names).onSnapshot(function(q){
        document.getElementById("parent").innerText = q.data().parent;
    })
}

function readFriendGrade(grades){
    db.collection("friends").doc(names).onSnapshot(function(q){
        document.getElementById("grade").innerText = q.data().grade;
    })
}


<script src="scripts/profile.js"> </script>