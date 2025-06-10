function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  document.getElementById("result").innerHTML = `
    <h3>أهلاً ${data.name}</h3>
    <img src="${data.picture}" width="100"/>
    <p>Email: ${data.email}</p>
  `;
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id: "ضع_هنا_معرف_العميل_Client_ID", // ← حط هنا Client ID بتاعك
    callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("loginBtn"),
    { theme: "outline", size: "large" }
  );
};