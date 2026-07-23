async function signup(e) {
    e.preventDefault();
    const userName = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const sentimentAnalysis = document.getElementById('sentimentAnalysis').checked;

    try {
        const response = await fetch(`${API_URL}/public/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName, email, password, sentimentAnalysis })
        });

        const data = await response.json();

        if (response.status === 201) {
            showSuccess('Account created successfully! Please login to continue.');
            setTimeout(() => window.location.href = 'login.html', 800);
        } else if (response.status === 409) {
            showError('signupError', data.message);
            showWarningToast(data.message || 'Username already exists');
        } else {
            showError('signupError', 'Signup failed. Please try again.');
            showErrorToast('Signup failed. Please try again.');
        }
    } catch (error) {
        console.error('Signup error:', error);
        showError('signupError', 'Connection error. Please try again.');
        showErrorToast('Connection error. Please check your internet connection.');
    }
}
