document.addEventListener('DOMContentLoaded', () => {
    // 1. Notification Toggle
    const notifWrapper = document.getElementById('notifWrapper');
    const notifDropdown = document.getElementById('notifDropdown');
    const notifBadge = document.getElementById('notifBadge');

    notifWrapper.addEventListener('click', (e) => {
        notifDropdown.classList.toggle('show');
        if (notifBadge) notifBadge.style.display = 'none';
        e.stopPropagation();
    });

    // 2. Search Filter
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        cards.forEach(card => {
            const text = card.getAttribute('data-name').toLowerCase();
            card.style.display = text.includes(filter) ? '' : 'none';
        });
    });

    // 3. Logout Logic
    // --- LOGOUT LOGIC ---
const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', () => {
    // 1. Ask for confirmation before leaving
    const confirmLogout = confirm("Are you sure you want to log out of ClubZone?");
    
    if (confirmLogout) {
        // 2. Visual feedback (Optional: provides a smoother transition)
        document.body.innerHTML = `
            <div style="height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #f0f7ff; font-family: 'Segoe UI', sans-serif;">
                <i class="fas fa-spinner fa-spin" style="font-size: 3rem; color: #0066b2; margin-bottom: 20px;"></i>
                <h2 style="color: #0066b2;">Logging out...</h2>
                <p style="color: #666;">Please wait while we redirect you.</p>
            </div>
        `;
        
        // 3. The Redirect
        // This will look for the file named 'login.html' in your folder
        setTimeout(() => {
            window.location.href = 'index.html'; 
        }, 1000); // 1-second delay for the animation
    }
});

    // Close dropdowns when clicking anywhere else
    window.addEventListener('click', () => {
        notifDropdown.classList.remove('show');
    });
});