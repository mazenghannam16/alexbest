const clientId = '6996456913-t6ceju8vos0icbev531e7iqdrtm7g7u4.apps.googleusercontent.com';
const redirectUri = 'https://alexbest.vercel.app/dashboard.html';
const scope = 'https://www.googleapis.com/auth/blogger';

function loginWithGoogle() {
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}&include_granted_scopes=true`;
  window.location.href = authUrl;
}
