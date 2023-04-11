let add=document.getElementById("add")
add.addEventListener('click',addTodo)

function addTodo(){
    if(dueDate.value==='' || task.value==='')
        return
    else{
        let task_item=document.createElement('div')
        task_item.classList="task-item"
        let task=document.createElement('span')
        task.textContent=window.task.value
        let dueDate=document.createElement('div')
        dueDate.textContent=window.dueDate.value
        let removeBtn=document.createElement('button')
        removeBtn.innerHTML='-'
        removeBtn.addEventListener('click',()=>{task.remove();dueDate.remove();removeBtn.remove();task_item.remove()})
        list.append(task_item)
        task_item.append(task)
        task_item.append(dueDate)
        task_item.append(removeBtn)
        window.task.value='';
        window.dueDate.value=''


    }    
}