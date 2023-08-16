let id=0;

document.getElementById('add-name-button').addEventListener('click', () => { //passing function to register input submission
    let table=document.getElementById('name')
    let row=table.insertRow(1); //This row is to display user input
    row.setAttribute('id', `item-${id}`); //Using template literals
    row.insertCell(0).innerHTML=document.getElementById('picture-select').value; //This is a row to display user form selection
    row.insertCell(1).innerHTML=document.getElementById('add-name').value; //This is a row column to display user input
    let actions=row.insertCell(2); //This is row column to display the delete button function
    actions.appendChild(createDeleteButtone(id++)); //This is to create the delete button along with user input
    document.getElementById('add-name').value = '';
});

function createDeleteButtone(id) { //This is to create the delete button along with user input
    let btn=document.createElement ('button');
    btn.className =' btn btn-outline-danger';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => { //This is passing a function to register the delete function when clicking
        console.log(`Deleting a row with the id: item-${id}`); //Another template literal
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}