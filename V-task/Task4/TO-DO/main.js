document.addEventListener('DOMContentLoaded', function() {
    var task = document.getElementById('task');
    var task_list = document.getElementById('saved-tasks');
    document.getElementById('add-btn').addEventListener('click', function() {
        if (task.value.length == 0) {
            alert('Please enter a task before clicking add');
        } else {
            let li = document.createElement('li');
            li.textContent = task.value;
            let mark = document.createElement('span');
            let dlt = document.createElement('span');
            mark.className = 'mark';
            dlt.className = 'dlt';
            mark.textContent = " ✔ ";
            dlt.textContent = "X";
            li.append(mark, dlt);
            task_list.appendChild(li);
            task.value = '';
        }
    });
    
    task_list.addEventListener('click', function(event) {
        if (event.target.tagName === 'SPAN') {
            if (event.target.className === 'dlt') {
                event.target.parentElement.remove();
            } else if (event.target.className === 'mark') {
                event.target.parentElement.style.textDecoration = 'line-through';
            }
        }
    });
});
