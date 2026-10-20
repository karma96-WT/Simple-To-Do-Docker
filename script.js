const inputTextField = document.getElementById('task-input-field');
const tasks = []

function clickAdd(){
    const inputText = inputTextField.value.trim();
    if (inputText == '') return;

    tasks.push(inputText);
    inputTextField.value = "";
    showTasks()
}

function showTasks(){
    const taskContainer = document.querySelector('.task-container')
    taskContainer.textContent = '';

    tasks.forEach((task,index)=>{
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add('bg-red-900', 'text-white', 'p-4', 'border', 'rounded-xl');
        
        deleteBtn.addEventListener('click', ()=>{
            tasks.splice(index,1);
            showTasks();
        });

        const divElement = document.createElement('div');
        divElement.classList.add('border', 'rounded-xl', 'w-[50%]', 'flex', 'justify-between', 'items-center', 'font-bold', 'pl-4', 'm-2')
        
        const textSpan = document.createElement('span');
        textSpan.textContent = task;

        divElement.appendChild(textSpan);
        divElement.appendChild(deleteBtn);

        taskContainer.appendChild(divElement);
    });
}