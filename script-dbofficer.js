// Sample Data
let announcements = [
    { id: 1, title: "Science Fair", event: "Innovate 2025", date: "2025-01-15", time: "09:00", loc: "Main Auditorium", status: "Approved" },
    { id: 2, title: "Debate Session", event: "Current Affairs", date: "2025-01-10", time: "15:30", loc: "Room 204", status: "Approved" }
];

const grid = document.getElementById('announcementGrid');
const modal = document.getElementById('announcementModal');
let currentEditId = null;

// Render Cards
function render() {
    grid.innerHTML = announcements.map(a => `
        <div class="card">
            <div class="card-img" style="background-image: url('https://via.placeholder.com/400x200')"></div>
            ${a.status === 'Pending' ? '<span class="status-tag">Pending Approval</span>' : ''}
            <div class="card-content">
                <small>${a.title}</small>
                <h4>${a.event}</h4>
                <p><i class="far fa-calendar"></i> ${a.date} | ${a.time}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${a.loc}</p>
                <button class="secondary-btn" onclick="openEdit(${a.id})" style="width:100%; margin-top:10px;">
                    <i class="fas fa-edit"></i> Edit Announcement
                </button>
            </div>
        </div>
    `).join('');
}

// Edit Functionality
window.openEdit = (id) => {
    const item = announcements.find(a => a.id === id);
    currentEditId = id;
    document.getElementById('titleInput').value = item.title;
    document.getElementById('eventInput').value = item.event;
    modal.style.display = 'flex';
}

document.getElementById('announcementForm').onsubmit = (e) => {
    e.preventDefault();
    const index = announcements.findIndex(a => a.id === currentEditId);
    
    // Simulate Pending Approval logic
    announcements[index] = {
        ...announcements[index],
        title: document.getElementById('titleInput').value,
        event: document.getElementById('eventInput').value,
        status: "Pending" // Automatically becomes pending after edit
    };
    
    alert("Changes saved! Announcement is now 'Pending Approval' by an Adviser.");
    modal.style.display = 'none';
    render();
}

// Logout logic
document.getElementById('logoutBtn').onclick = () => {
    if(confirm("Logout from Officer Dashboard?")) {
        window.location.href = 'index.html';
    }
}

document.getElementById('closeModal').onclick = () => modal.style.display = 'none';

render();