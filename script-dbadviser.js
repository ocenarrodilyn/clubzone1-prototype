// Simulated database of pending announcements
let pendingItems = [
    {
        id: 101,
        title: "Annual Science Fair",
        club: "Science Club",
        img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=400",
        desc: "Innovate & Discover 2025"
    },
    {
        id: 102,
        title: "Weekly Debate Session",
        club: "Debate Society",
        img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400",
        desc: "Current Affairs Discussion"
    }
];

const pendingGrid = document.getElementById('pendingGrid');
const pendingCountEl = document.getElementById('pendingCount');
const alertCountEl = document.getElementById('alertCount');
const editModal = document.getElementById('editModal');

// Function to render pending cards
function renderPending() {
    pendingCountEl.innerText = pendingItems.length;
    alertCountEl.innerText = pendingItems.length;
    
    if (pendingItems.length === 0) {
        pendingGrid.innerHTML = `<p style="color: #666;">No pending announcements to review.</p>`;
        document.getElementById('reviewAlert').style.display = 'none';
        return;
    }

    pendingGrid.innerHTML = pendingItems.map(item => `
        <div class="card" id="card-${item.id}">
            <div class="card-img" style="background-image: url('${item.img}')">
                <span class="pending-tag">Pending Review</span>
            </div>
            <div class="card-content">
                <small style="color: var(--primary-blue); font-weight: bold;">${item.club}</small>
                <h4>${item.title}</h4>
                <p style="font-size: 0.9rem; color: #666;">${item.desc}</p>
                <div class="action-buttons">
                    <button class="btn-approve" onclick="approveItem(${item.id})">Approve</button>
                    <button class="btn-edit" onclick="openEdit(${item.id})"><i class="fas fa-edit"></i></button>
                    <button class="btn-reject" onclick="removeItem(${item.id})"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        </div>
    `).join('');
}

// Simulate Approval (Posting to Bulletin Board)
window.approveItem = (id) => {
    alert("Announcement Approved! It is now posted on the Student Bulletin Board.");
    removeItem(id);
};

// Remove item from pending list
window.removeItem = (id) => {
    pendingItems = pendingItems.filter(item => item.id !== id);
    renderPending();
};

// Handle Adviser Editing
let activeEditId = null;
window.openEdit = (id) => {
    const item = pendingItems.find(p => p.id === id);
    activeEditId = id;
    document.getElementById('editTitle').value = item.title;
    document.getElementById('editDesc').value = item.desc;
    editModal.style.display = 'flex';
};

document.getElementById('saveEdit').onclick = () => {
    const item = pendingItems.find(p => p.id === activeEditId);
    item.title = document.getElementById('editTitle').value;
    item.desc = document.getElementById('editDesc').value;
    alert("Changes saved and announcement approved!");
    removeItem(activeEditId);
    editModal.style.display = 'none';
};

document.getElementById('closeModal').onclick = () => editModal.style.display = 'none';

// Logout Logic
document.getElementById('logoutBtn').onclick = () => {
    if(confirm("Are you sure you want to logout?")) {
        window.location.href = 'index.html';
    }
};

// Initial Render
renderPending();