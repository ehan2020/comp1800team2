function addActivity(){

    var activityRef = db.collection("activities");

    activityRef.doc("a-r1").set({
        room: "1",
        name: "Coding",
        category: "Academic"

    })

    activityRef.doc("a-r2").set({
        room: "2",
        name: "Math",
        category: "Academic" 
    })
    
    activityRef.doc("a-r3").set({
        room: "3",
        name: "Science",
        category: "Academic" 
    })
    
    activityRef.doc("a-r4").set({
        room: "4",
        name: "Reading",
        category: "Academic" 
    })   
}
addActivity();

function readRoomNumber(rooms){
    if(rooms == "a-r1"){
        room == readRoomNumber("a-r1");
    } else if(rooms == "a-r2"){
        room == readRoomNumber("a-r2");
    }
};



getActivity(){
    db.collection("activities").get().then(function(snap){
        snap.forEach(function(doc){
            var n = doc.data().name;
            console.log(a);
            document.getElementsByID(abc).innerText=n;
        })
    })

}
getActivity();