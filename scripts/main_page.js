import { users } from "../data/users.js";

const params = new URLSearchParams(window.location.search);
const usernameLogin = params.get('user');

const userLogin = users.find((user) => {
  return user.username === usernameLogin;
});

if (userLogin) {
  document.querySelector('main').innerHTML = `
    <h1>Welcome back, ${userLogin.name}!</h1>
    <div class="info-container">
      <p>Your info:</p>
      <p>Username - ${userLogin.username}</p>
      <p>E-mail - ${userLogin.email}</p>
      <button class="logout-button js-logout-button">Logout</button>
    </div>
  `;

  document.querySelector('.js-logout-button')
    .addEventListener('click', () => {
      window.location.href = 'form_log_in.html';
    });
} else {
  document.querySelector('main').innerHTML = `<h1 class="user-not-found">User not found.</h1>`;
}
