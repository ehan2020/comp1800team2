function readFriendNames(names){
    if(names == "a1"){
        name = readFriendName("a1");
    }
    else if(names == "a2"){
        name = readFriendName("a2");
    }
    else if(names == "a3"){
        name = readFriendName("a3");
    }
    else if(names == "d1"){
        name = readFriendName("d1");
    }
    else if(names == "d2"){
        name = readFriendName("d2");
    }
    else if(names == "j1"){
        name = readFriendName("j1");  
    }
    console.log(name);
    return name;
}

function readFriendIds(ids){
    if(ids == "a1"){
        id = readFriendId("a1");
    }
    else if(ids == "a2"){
        id = readFriendId("a2");
    }
    else if(ids == "a3"){
        id = readFriendId("a3");
    }
    else if(ids == "d1"){
        id = readFriendId("d1");
    }
    else if(ids == "d2"){
        id = readFriendId("d2");
    }
    else if(ids == "j1"){
        id = readFriendId("j1");  
    }
    return id;
}

function readFriendParents(parents){
    if(parents == "a1"){
        parent = readFriendParent("a1");
    }
    else if(parents == "a2"){
        parent = readFriendParent("a2");
    }
    else if(parents == "a3"){
        parent = readFriendParent("a3");
    }
    else if(parents == "d1"){
        parent = readFriendParent("d1");
    }
    else if(parents == "d2"){
        parent = readFriendParent("d2");
    }
    else if(parents == "j1"){
        parent = readFriendParent("j1");  
    }
    return parent;
}

function readFriendGrades(grades){
    if(grades == "a1"){
        grade = readFriendId("a1");
    }
    else if(grades == "a2"){
        grade = readFriendId("a2");
    }
    else if(grades == "a3"){
        grade = readFriendId("a3");
    }
    else if(grades == "d1"){
        grade = readFriendId("d1");
    }
    else if(grades == "d2"){
        grade = readFriendId("d2");
    }
    else if(grades == "j1"){
        grade = readFriendId("j1");  
    }
    return grade;
}

function readFriend(infos){
    console.log(infos);
    namess = readFriendNames(infos);
    idss = readFriendIds(infos);
    parentss = readFriendParent(infos);
    gradess = readFriendGrade(infos);
    readFriendName(namess);
    readFriendId(idss);
    readFriendParent(parentss);
    readFriendGrade(gradess);
}

function getFriend(){
    var queryString = decodeURIComponent(window.location.search);
    var queries = queryString.split("?");   //delimiter
    var item1 = queries[1];                 //get what's after '?'
    console.log(item1);
    readFriend(item1);
}

function getUser(){
    firebase.auth().onAuthStateChanged(function (user) {
        if (user){
            console.log ("user is signed in");
            db.collection("users")
            .doc(user.uid)
            .get()
            .then(function(doc){
                var n = doc.data().name;
                console.log(n);
                $("#username").text(n);
            })
        }
        else {
            console.log ("no user is signed in");
        }
    })
}
getUser();