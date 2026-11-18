import { users, getInputValue, setErrorMessage, saveToStorage } from "../data/users.js";

document.querySelector('.js-submit-button')
  .addEventListener('click', (event) => {
    event.preventDefault();

    const usernameEmail = getInputValue('js-username-email-input');
    const password = getInputValue('js-password-input');

    const emptyInput = [usernameEmail, password].some((value) => {
      return value === "";
    });

    const foundUser = users.find((user) => {
      return user.username === usernameEmail || user.email === usernameEmail;
    });

    if (emptyInput) {
      const errorMessage = `<p class="error-message">
        All fields are required.
      </p>`;

      setErrorMessage(errorMessage);
    }

    else if (!foundUser) {
      const errorMessage = `<p class="error-message">
        User or email not found.
      </p>`;
      setErrorMessage(errorMessage);
    }

    else if (foundUser.password !== btoa(password)) {
      const errorMessage = `<p class="error-message">
        Incorrect password. Please try again.
      </p>`;

      setErrorMessage(errorMessage);
    }

    else {
      window.location.href = "main_page.html?user=" + foundUser.username;
    }
  });
