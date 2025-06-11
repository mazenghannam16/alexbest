// استخراج التوكن من URL
const token = window.location.hash.split('access_token=')[1]?.split('&')[0];
const blogId = '277624714973052630'; // ID الخاص بمدونتك

// عرض الإيميل
fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
  headers: { Authorization: 'Bearer ' + token }
})
.then(res => res.json())
.then(data => {
  document.getElementById('userEmail').innerText = `مرحبًا، ${data.email}`;
});

// نشر مقال
function publishPost() {
  const title = document.getElementById('postTitle').value;
  const content = document.getElementById('postContent').value;

  fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('status').innerText = '✅ تم نشر المقال بنجاح!';
  });
}

// نشر صفحة
function publishPage() {
  const title = document.getElementById('postTitle').value;
  const content = document.getElementById('postContent').value;

  fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/pages/`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('status').innerText = '✅ تم نشر الصفحة بنجاح!';
  });
}
