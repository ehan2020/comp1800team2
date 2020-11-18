function addActivity(){

    var activityRef = db.collection("activities");

    activityRef.doc("a-1").set({
        name: "Math",
        category: "Academic"
    })

    activityRef.doc("a-2").set({
        name: "Reading",
        category: "Academic" 
    })
    
    activityRef.doc("a-3").set({
        name: "Science",
        category: "Academic" 
    })
    
    activityRef.doc("a-4").set({
        name: "Games",
        category: "Social" 
    })   
}
addActivity();

getActivity(){
    db.collection("activities").get().then(function(snap){
        snap.forEach(function(doc){
            var n = doc.data().name;
            console.log(a);
            document.getElementsByClassName(card-text).innerText=n;
        })
    })

}
getActivity();