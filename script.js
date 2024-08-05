/* 
<li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center bg-secondary"
                style="border: hidden; border-bottom: solid .25rem;">
                <p class="fs-3 text-light">item1</p>
                <i class="bi bi-trash-fill fs-2"></i>
            </li>
*/

const addTaskBtn = document.querySelector('#addTaskBtn');
addTaskBtn.addEventListener('click', addTask);
document.querySelector('.taskValue').addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        addTask();

    }
});

const ul = document.querySelector('ul');
ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('trash') === true) {
        e.target.parentElement.remove();
    }
})

const searchHolder = document.querySelector('.searchInput');

searchHolder.addEventListener('keyup', e => {
    const lis = Array.from(document.querySelectorAll('li'));
    lis.forEach(li => {


        if (!li.children[0].innerHTML.includes(searchHolder.value)) {
            li.classList.remove('d-flex');
            li.classList.add('d-none');
           
        }
    })
})

searchHolder.addEventListener('keyup', e => {
    const lis = Array.from(document.querySelectorAll('li'));
    lis.forEach(li => {


        if (li.children[0].innerHTML.includes(searchHolder.value)) {
            li.classList.remove('d-none');
            li.classList.add('d-flex');
        }
    })
})



function addTask() {
    const taskValue = document.querySelector('.taskValue');
    taskValue.value = taskValue.value.trim();
    if (!/[a-zA-Z0-9]/.test(taskValue.value)) {
        return;
    }
    document.querySelector('ul').innerHTML +=
        `
    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center bg-secondary"
                style="border: hidden; border-bottom: solid .25rem;">
                <p class="fs-3 text-light">${taskValue.value}</p>
                <i class="bi bi-trash-fill fs-2 trash"></i>
    </li>
    
    `
    taskValue.value = ''

}



