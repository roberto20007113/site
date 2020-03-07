function add() {
    if(document.getElementById("input").value != ""){
        var ul = document.getElementById("lista");
        var candidate = document.getElementById("input");
        var li = document.createElement("li");
        li.setAttribute('id', candidate.value);
        li.appendChild(document.createTextNode(candidate.value));
        ul.appendChild(li);
    }
}