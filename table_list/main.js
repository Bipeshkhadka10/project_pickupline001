const btn=document.getElementById('btn');

function addListInTable(e){
    e.preventDefault();
    const name=document.getElementById('name').value.trim();
    const id=document.getElementById('ide').value.trim();

    const tbody=document.querySelector('tbody');
    tbody.innerHTML +=`
    <tr>
    <td>${name}</td>
    <td>${id}</td>
    <td><button class='del_btn'>remove</button></td>
    </tr>`
    const del_btnel=document.getElementsByClassName('del_btn')
}  
// const del_btnel=document.getElementsByClassName('del_btn');

function delete_data()
{
    alert("data is delete");
}




btn.addEventListener('click',addListInTable);
del_btnel.addEventListener('click',delete_data);