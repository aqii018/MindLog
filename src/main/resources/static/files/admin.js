requireAuth();

document.addEventListener('DOMContentLoaded', () => {
    if (!getIsAdmin()) {
        showErrorToast('Admins only. Redirecting...');
        setTimeout(() => window.location.href = 'journal.html', 800);
        return;
    }
    renderNavbar();
    loadAllUsers();
});

async function loadAllUsers() {
    try {
        const response = await fetch(`${API_URL}/admin/all-users`, {
            headers: { 'Authorization': `Bearer ${getAuthToken()}` }
        });

        if (response.ok) {
            const users = await response.json();
            displayAllUsers(users);
            showSuccess(`Loaded ${users.length} users successfully`);
        } else {
            showErrorToast('Failed to load users');
        }
    } catch (error) {
        console.error('Error loading users:', error);
        showErrorToast('Connection error while loading users');
    }
}

function displayAllUsers(users) {
    const container = document.getElementById('allUsersList');

    if (!users || users.length === 0) {
        container.innerHTML = '<div class="no-entries">No users found</div>';
        return;
    }

    container.innerHTML = users.map(user => `
        <div class="entry-card">
            <div class="entry-title">${user.userName}</div>
            <div class="entry-content">
                <strong>Email:</strong> ${user.email || 'N/A'}<br>
                <strong>Roles:</strong> ${user.roles ? user.roles.join(', ') : 'USER'}<br>
                <strong>Entries:</strong> ${user.journalEntries ? user.journalEntries.length : 0}
            </div>
        </div>
    `).join('');
}

function showCreateAdminModal() {
    document.getElementById('createAdminModal').classList.add('active');
}

function closeCreateAdminModal() {
    document.getElementById('createAdminModal').classList.remove('active');
    document.getElementById('adminUsername').value = '';
    document.getElementById('adminPassword').value = '';
    document.getElementById('signupEmailAdmin').value = '';
    document.getElementById('sentimentAnalysisAdmin').checked = false;
}

async function createAdmin(e) {
    e.preventDefault();
    const userName = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;
    const sentiment = document.getElementById('sentimentAnalysisAdmin').checked;
    const email = document.getElementById('signupEmailAdmin').value;

    try {
        const response = await fetch(`${API_URL}/admin/create-admin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getAuthToken()}`
            },
            body: JSON.stringify({ userName, password, email, sentiment })
        });

        if (response.ok) {
            closeCreateAdminModal();
            showSuccess('Admin created successfully! 👤');
            loadAllUsers();
        } else {
            showError('adminError', 'Failed to create admin');
            showErrorToast('Failed to create admin. Please try again.');
        }
    } catch (error) {
        console.error('Create admin error:', error);
        showError('adminError', 'Failed to create admin');
        showErrorToast('Connection error while creating admin');
    }
}
