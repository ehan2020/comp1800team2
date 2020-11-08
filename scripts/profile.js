function readFriendNames(names){
    if(names == "a1"){
        name = readFriendName("a1");
    }
    if(names == "a2"){
        name = readFriendName("a2");
    }
    if(names == "a3"){
        name = readFriendName("a3");
    }
    if(names == "d1"){
        name = readFriendName("d1");
    }
    if(names == "d2"){
        name = readFriendName("d2");
    }
    if(names == "j1"){
        name = readFriendName("j1");  
    }
    return name;
}

function readFriendIds(ids){
    if(ids == "a1"){
        id = readFriendId("a1");
    }
    if(ids == "a2"){
        id = readFriendId("a2");
    }
    if(ids == "a3"){
        id = readFriendId("a3");
    }
    if(ids == "d1"){
        id = readFriendId("d1");
    }
    if(ids == "d2"){
        id = readFriendId("d2");
    }
    if(ids == "j1"){
        id = readFriendId("j1");  
    }
    return id;
}

function readFriendParents(parents){
    if(parents == "a1"){
        parent = readFriendParent("a1");
    }
    if(parents == "a2"){
        parent = readFriendParent("a2");
    }
    if(parents == "a3"){
        parent = readFriendParent("a3");
    }
    if(parents == "d1"){
        parent = readFriendParent("d1");
    }
    if(parents == "d2"){
        parent = readFriendParent("d2");
    }
    if(parents == "j1"){
        parent = readFriendParent("j1");  
    }
    return parent;
}

function readFriendGrades(grades){
    if(grades == "a1"){
        grade = readFriendId("a1");
    }
    if(grades == "a2"){
        grade = readFriendId("a2");
    }
    if(grades == "a3"){
        grade = readFriendId("a3");
    }
    if(grades == "d1"){
        grade = readFriendId("d1");
    }
    if(grades == "d2"){
        grade = readFriendId("d2");
    }
    if(grades == "j1"){
        grade = readFriendId("j1");  
    }
    return grade;
}

function readFriend(infos){
    namess = readFriendNames(infos);
    idss = readFriendIds(infos);
    parentss = readFriendParent(infos);
    gradess = readFriendGrade(infos);
    readFriendName(namess);
    readFriendId(idss);
    readFriendParent(parentss);
    readFriendGrade(gradess);
}

<script src="scripts/friendProfile.js"></script>