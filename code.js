const searchBox = document.querySelector("#search-box");
const listItem= document.querySelector("#list-item");

function addTask(){
    if(searchBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = searchBox.value;
        listItem.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    searchBox.value = '';
    saveTask();
}

listItem.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
})


function saveTask(){
    localStorage.setItem("task", listItem.innerHTML);
}

function showTask(){
    listItem.innerHTML = localStorage.getItem("task");
}
showTask();