# 📋 Registration and Login System (Form)

A simple, interactive web project developed using **HTML5**, **CSS3**, and **modern JavaScript (ES6)** for basic user management,
with data persistence handled via the browser's `localStorage`.

Website Link: 

---

## 🚀 Features

* **Create Account (`form_sign_up.html`):**
* Registration for new users, requiring Name, Username, Email, and Password. 
* Validation of mandatory fields and password confirmation. 
* Automatic checks to prevent duplicate emails or usernames.
* **Log In (`form_log_in.html`):**
* Authentication using either a Username or Email and a Password. 
* Dynamic error messages for incorrect credentials or empty fields.
* **Home Page (`main_page.html`):**
* A personalized welcome dashboard that displays the authenticated user's information after logging in.
* Option to end the session (Logout).
* **Data Persistence (`users.js`):**
* Storage and retrieval of user data directly within the browser using `localStorage`.

---

## 🛠️ Technologies Used

* **HTML5:** Semantic structuring of pages.
* **CSS3:** Custom styling, Flexbox, and responsive design.
* **JavaScript (ES6 Modules):** Validation logic, DOM manipulation, and user state management.

---

## 📂 File Structure

```text
Form/
│
├── form_log_in.html       # Login page
├── index.html             # Registration page
├── main_page.html         # Home page / User dashboard
│
├── styles/
│   ├── header.css         # Global header styles
│   ├── form.css           # Form styles (Login/Registration)
│   └── main_page.css      # Main page styles
│
└── scripts/
├── form_log_in.js     # Authentication and login validation logic
├── sign_up.js         # Logic for registering new users
├── main_page.js       # Logic for displaying logged-in user data
└── users.js           # Utility functions and storage management
```

## ⚠️ Security Note
* **Warning:** This project uses the native `btoa()` function solely for basic password encoding, intended for educational and study purposes. In real-world production applications, use robust cryptographic libraries (such as `bcrypt`) and a secure backend.
