
var list = document.getElementById("list")



function deletitem(e){
     e.parentNode.remove()
}

function edititem(e){
    
    var val = e.parentNode.firstChild.nodeValue   
    var  editValue = prompt("Enter Your Edited Value Here",val)
    e.parentNode.firstChild.nodeValue = editValue 
 
}



function deletall(){
    list.innerHTML=""
}
function addtodo(){
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement('li');
    var litext = document.createTextNode(todo_item.value);
    li.appendChild(litext)

var delBtn = document.createElement("button")
var textBtn = document.createTextNode("DELET")
delBtn.appendChild(textBtn)
li.appendChild(delBtn)
delBtn.setAttribute("id","delet")
delBtn.setAttribute("onclick","deletitem(this)")



var editBtn = document.createElement("button")
var textBtn = document.createTextNode("EDIT")

editBtn.appendChild(textBtn)
li.appendChild(editBtn)
editBtn.setAttribute("id","edit")
editBtn.setAttribute("onclick","edititem(this)")

list.appendChild(li)  

    todo_item.value = ""

    console.log(li)
}