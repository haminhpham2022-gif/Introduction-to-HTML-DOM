const input=document.getElementById("taskinput")
const addbtn=document.getElementById("addtaskbtn")
const list=document.getElementById("taskslist")
const clearbtn=document.getElementById("clearAllButton")

addbtn.addEventListener("click", function(){
    const taskTest=input.value.trim()

    if (taskTest!==""){
        const li=document.createElement("li")
        list.className="list-group-item d-flex justify-content-between align-items-center"
        li.textContent=taskTest

        const deletebtn=document.createElement("button")
        deletebtn.textContent="X"
        deletebtn.className="btn btn-danger btn-sm"

        deletebtn.addEventListener("click", ()=>li.remove())


        li.appendChild(deletebtn)
        list.appendChild(li)
        input.value=""

    }else{
        alert("Please enter a task")
    }

    clearbtn.addEventListener("click",function(){
        list.innerHTML=""
    })
})