const addTask=document.getElementById('addTaskBtn')
const deleteAll=document.getElementById('deleteTaskBtn')
const taskListElement=document.getElementById('taskList')

var taskList=[]

function taskRendering(){
    taskListElement.innerHTML='';
    taskList.forEach((task,index)=>{
        const listItem=document.createElement('li')
        listItem.innerHTML=`${task.task}-${task.status} <button id='deleteTaskBtn' onClick="deleteTask(${index})" >Delete</button>`
        taskListElement.appendChild(listItem)
    })
}

addTask.addEventListener('click',()=>{
    const taskInput=document.getElementById('taskInput')
    const taskStatus=document.getElementById('taskStatus')

    taskList.unshift({task:taskInput.value,status:taskStatus.value})
    taskRendering()
    taskInput.value=''
    taskStatus.value='completed'
  
})

deleteAll.addEventListener('click',()=>{
    taskList=[]
    taskRendering()
})

window.deleteTask =(index)=>{
    taskList.splice(index,1)
    taskRendering()
}