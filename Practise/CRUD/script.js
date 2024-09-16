let id = 1;
let currentRow = null;
document.getElementById('addButton').addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    if (name === '' || email === '') {
        alert('Please fill both name and email fields.');
        return; 
    }
    let table = document.getElementById('tbl');
    let row = document.createElement('tr');
    let id_cell = document.createElement('td');
    let name_cell = document.createElement('td');
    let email_cell = document.createElement('td');
    let actions_cell = document.createElement('td');
    id_cell.innerHTML = id;
    name_cell.innerHTML = name;
    email_cell.innerHTML = email;
    row.appendChild(id_cell);
    row.appendChild(name_cell);
    row.appendChild(email_cell);
    table.appendChild(row);
    let edit = document.createElement("button");
    edit.textContent = "Edit";
    let dlt = document.createElement("button");
    dlt.textContent = "delete";
    edit.className = `edit-btn`;
    dlt.className = 'dlt-btn';
    actions_cell.appendChild(edit);
    actions_cell.appendChild(dlt);
    row.appendChild(actions_cell);
    let hr_row = document.createElement('tr');
    let hr_cell = document.createElement('td');
    hr_cell.colSpan = 4;
    let hr = document.createElement('hr');
    hr_cell.appendChild(hr);
    hr_row.appendChild(hr_cell);
    table.appendChild(hr_row);

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    id += 1;
    edit.addEventListener('click', function () {
        currentRow = row;
        document.getElementById('updateName').value = name_cell.textContent;
        document.getElementById('updateMail').value = email_cell.textContent;
        alert('use update tab to update details.')
    })
    dlt.addEventListener('click', function () {
        table.removeChild(row);
        table.removeChild(hr_row);
    });

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    id += 1;
});

document.getElementById('updateButton').addEventListener('click', function () {
    if (currentRow) {
        let updatedName = document.getElementById('updateName').value;
        let updatedEmail = document.getElementById('updateMail').value;
        currentRow.children[1].textContent = updatedName;
        currentRow.children[2].textContent = updatedEmail;
        document.getElementById('updateName').value = '';
        document.getElementById('updateMail').value = '';
        currentRow = null;
    }
})

document.getElementById('cancelButton').addEventListener('click', function () {
    document.getElementById('updateName').value = '';
    document.getElementById('updateMail').value = '';
    currentRow = null;
})