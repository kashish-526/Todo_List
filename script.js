const inputBox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){//''means empty show inputbox
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);//display list container
        let span=document.createElement("span");//for cross icon
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    inputBox.value="";//clear when add elemnt and for next element type
    saveData();//call 

}
//for click
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();//call
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();//call 
    }
},false);
//store our list item

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);

}

function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();