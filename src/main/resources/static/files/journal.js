requireAuth();

document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    loadJournalEntries();
});

async function loadJournalEntries() {
    try {
        const response = await fetch(`${API_URL}/journal`, {
            headers: { 'Authorization': `Bearer ${getAuthToken()}` }
        });

        if (response.ok) {
            const entries = await response.json();
            displayEntries(entries);
        } else {
            showError('entryError', 'Failed to load entries');
            showErrorToast('Failed to load journal entries');
        }
    } catch (error) {
        console.error('Error loading entries:', error);
        showErrorToast('Connection error while loading entries');
    }
}

function displayEntries(entries) {
    const container = document.getElementById('journalEntries');

    if (!entries || entries.length === 0) {
        container.innerHTML = '<div class="no-entries">No entries yet. Create your first journal entry!</div>';
        return;
    }

    container.innerHTML = entries.map(entry => `
        <div class="entry-card">
            <div class="entry-title">${entry.title}</div>
            <div class="entry-date">${new Date(entry.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}</div>
            ${entry.sentiment ? `<span class="sentiment-badge sentiment-${entry.sentiment}">${entry.sentiment}</span>` : ''}
            <div class="entry-content">${entry.content}</div>
            <div class="entry-actions">
                <button class="btn btn-small" onclick="editEntry('${entry.id}')">Edit</button>
                <button class="btn btn-small btn-danger" onclick="deleteEntry('${entry.id}')">Delete</button>
            </div>
        </div>
    `).join('');
}

function showNewEntryModal() {
    document.getElementById('newEntryModal').classList.add('active');
}

function closeNewEntryModal() {
    document.getElementById('newEntryModal').classList.remove('active');
    document.getElementById('entryTitle').value = '';
    document.getElementById('entryContent').value = '';
    document.getElementById('entrySentiment').value = '';
}

async function createEntry(e) {
    e.preventDefault();
    const title = document.getElementById('entryTitle').value;
    const content = document.getElementById('entryContent').value;
    const sentiment = document.getElementById('entrySentiment').value;

    const entry = { title, content };
    if (sentiment) entry.sentiment = sentiment;

    try {
        const response = await fetch(`${API_URL}/journal`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getAuthToken()}`
            },
            body: JSON.stringify(entry)
        });

        if (response.ok) {
            closeNewEntryModal();
            showSuccess('Journal entry created successfully! ✍️');
            loadJournalEntries();
        } else {
            showError('entryError', 'Failed to create entry');
            showErrorToast('Failed to create entry. Please try again.');
        }
    } catch (error) {
        console.error('Create entry error:', error);
        showError('entryError', 'Failed to create entry');
        showErrorToast('Connection error. Please check your internet connection.');
    }
}

function closeEditEntryModal() {
    document.getElementById('editEntryModal').classList.remove('active');
}

async function editEntry(entryId) {
    try {
        const response = await fetch(`${API_URL}/journal/id/${entryId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getAuthToken()}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const entry = await response.json();
            document.getElementById('editEntryId').value = entryId;
            document.getElementById('editEntryTitle').value = entry.title;
            document.getElementById('editEntryContent').value = entry.content;
            document.getElementById('editEntrySentiment').value = entry.sentiment || '';
            document.getElementById('editEntryModal').classList.add('active');
        } else {
            showError('editEntryError', `Failed to load entry: ${response.status}`);
            showErrorToast('Failed to load entry for editing');
        }
    } catch (error) {
        console.error('Edit entry error:', error);
        showError('editEntryError', 'Failed to load entry');
        showErrorToast('Connection error while loading entry');
    }
}

async function updateEntry(e) {
    e.preventDefault();
    const entryId = document.getElementById('editEntryId').value;
    const title = document.getElementById('editEntryTitle').value;
    const content = document.getElementById('editEntryContent').value;
    const sentiment = document.getElementById('editEntrySentiment').value;

    const entry = { title, content };
    if (sentiment) {
        entry.sentiment = sentiment;
    }

    try {
        const response = await fetch(`${API_URL}/journal/id/${entryId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getAuthToken()}`
            },
            body: JSON.stringify(entry)
        });

        if (response.status == 200) {
            closeEditEntryModal();
            showSuccess('Entry updated successfully! 📝');
            loadJournalEntries();
        } else {
            showError('editEntryError', 'Failed to update entry');
            showErrorToast('Failed to update entry. Please try again.');
        }
    } catch (error) {
        console.error('Update entry error:', error);
        showError('editEntryError', 'Failed to update entry');
        showErrorToast('Connection error while updating entry');
    }
}

async function deleteEntry(entryId) {
    if (!confirm('Are you sure you want to delete this entry?')) return;

    try {
        const response = await fetch(`${API_URL}/journal/id/${entryId}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${getAuthToken()}` }
        });

        if (response.ok) {
            showSuccess('Entry deleted successfully! 🗑️');
            loadJournalEntries();
        } else {
            showErrorToast('Failed to delete entry. Please try again.');
        }
    } catch (error) {
        console.error('Delete entry error:', error);
        showErrorToast('Connection error while deleting entry');
    }
}

async function sendSentimentEmail() {
    showInfoToast('Preparing your sentiment report... 📧');

    try {
        const response = await fetch(`${API_URL}/user/send-me-mail`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${getAuthToken()}` }
        });

        if (response.ok) {
            showSuccess('Sentiment report sent to your email! Check your inbox. 📬');
        } else {
            showErrorToast('Failed to send sentiment report. Please try again.');
        }
    } catch (error) {
        console.error('Send email error:', error);
        showErrorToast('Connection error while sending email');
    }
}
