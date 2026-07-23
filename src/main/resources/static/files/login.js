// If already logged in, skip straight to journal
if (getAuthToken()) {
    window.location.href = 'journal.html';
}

async function login(e) {
    e.preventDefault();
    const userName = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const requestData = { userName, password };

    try {
        const response = await fetch(`${API_URL}/public/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        });

        const data = await response.json();

        if (data.jwt != "") {
            setAuthToken(data.jwt);
            setCurrentUser({ userName });

            let isAdmin = false;
            try {
                if (data.role && data.role == "ADMIN") isAdmin = true;
            } catch (error) {
                console.error('Error checking admin status:', error);
            }
            setIsAdmin(isAdmin);

            showSuccess(`Welcome back, ${userName}! `);
            setTimeout(() => window.location.href = 'journal.html', 400);
        } else {
            showError('loginError', 'Invalid username or password');
        }
    } catch (error) {
        console.error('Login error:', error);
        showError('loginError', 'Login failed');
    }
}
