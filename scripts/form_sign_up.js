import { users, getInputValue, setErrorMessage, saveToStorage, } from "../data/users.js";

document.querySelector('.js-submit-button')
  .addEventListener('click', (event) => {
    event.preventDefault(); 

    const name = getInputValue('js-name-input');
    const username = getInputValue('js-username-input');
    const email = getInputValue('js-email-input');
    const password = getInputValue('js-password-input');
    const confirmation = getInputValue('js-confirmation-input');

    const emptyInput = [name, username, email, password, confirmation].some((value) => {
      return value === "";
    });

    const foundUser = users.find((user) => {
      return user.username === username || user.email === email;
    });

    if (emptyInput) {
      const errorMessage = `<p class="error-message">
        All fields are required.
      </p>`;

      setErrorMessage(errorMessage);
    }
    
    else if (password !== confirmation) {
      const errorMessage = `<p class="error-message">
        Passwords do not match. Please try again.
      </p>`;

      setErrorMessage(errorMessage);
    } 

    else if (foundUser) {
      const errorMessage = `<p class="error-message">
        Username or email already exists. Please try again or log in.
      </p>`;

      setErrorMessage(errorMessage);
    }

    else {
      const userData = {
        name: name,
        username: username,
        email: email,
        password: btoa(password),
      };
      users.push(userData);

      saveToStorage();

      window.location.href = "main_page.html?user=" + username;
    }
  });
