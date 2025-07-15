document.addEventListener('DOMContentLoaded', async () => {

const userTableBody = document.querySelector('#userTable tbody');


const fetchUsers = async () => {
const response = await fetch('api.php');
const users = await response.json();

userTableBody.innerHTML = '';
users.forEach(user => {

const row = userTableBody.insertRow();

row.innerHTML = `
<td>${user.id}</td> <td>${user.name}</td> <td>${user.age}</td> <td class="status-cell">${user.status}</td> <td>
<button class="toggle-btn" data-id="${user.id}" data-status="${user.status}">toggle</button>
</td>
`;
});
};


document.getElementById('addUserForm').addEventListener('submit', async (e) => {

e.preventDefault();

const name = document.getElementById('name').value;
const age = document.getElementById('age').value;

const response = await fetch('api.php', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ name, age })
});
const result = await response.json();
if (result.success) {

e.target.reset(); 

fetchUsers();
} else {

alert('Error' + result.error);
}
});

userTableBody.addEventListener('click', async (e) => {

if (e.target.classList.contains('toggle-btn')) {
const btn = e.target; 
const userId = btn.dataset.id; 
const currentStatus = parseInt(btn.dataset.status); 
const newStatus = currentStatus === 0 ? 1 : 0; 

const response = await fetch('api.php', {
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ id: userId, status: newStatus })
});

const result = await response.json();

if (result.success) {

const row = btn.closest('tr');

row.querySelector('.status-cell').textContent = result.newStatus;

btn.dataset.status = result.newStatus;
} else {

alert('Error' + result.error);
}
}
});

fetchUsers();
});