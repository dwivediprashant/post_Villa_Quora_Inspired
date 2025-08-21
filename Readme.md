# 📸 Post Villa  

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/EJS-8BC34A?style=for-the-badge&logo=ejs&logoColor=white" />
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
</p>

---

## 🛠️ Learned Tools
- <img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=nodedotjs&logoColor=white" /> **Node.js** → Backend runtime environment  
- <img src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white" /> **Express.js** → Web framework for building REST APIs  
- <img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white" /> **npm** → Dependency and package manager  
- <img src="https://img.shields.io/badge/EJS-8BC34A?style=flat&logo=ejs&logoColor=white" /> **EJS** → Templating engine for dynamic HTML rendering  

---

##  Project Name
**Post Villa**  
A web application built on **Node.js, Express, EJS, and JavaScript**, providing a simple platform for creating, editing, viewing, and deleting user posts with image uploads.

---

##  Project Overview
**Post Villa** is a mini social-post application where users can:
- Share posts with a description and image.  
- View all posts on a homepage.  
- Filter posts by username to view personal posts.  
- View detailed post information individually.  
- Edit and delete existing posts.  

It demonstrates **full CRUD operations** (Create, Read, Update, Delete), form handling, image uploads with **Multer**, and server-side rendering with **EJS templates**.  

This project was built as a learning experience to strengthen backend development skills and dynamic frontend rendering.

---

## 📚 What I Learned  
This project gave me **hands-on learning** in multiple areas:  

- **Backend with Express.js**  
  - Learned how to set up routes (`GET`, `POST`, `PUT`, `DELETE`)  
  - Middleware usage for handling requests and responses  

- **Templating with EJS**  
  - Dynamically injected data into HTML  
  - Loops and conditionals for rendering posts  

- **File Uploads with Multer**  
  - Implemented image upload feature  
  - Managed file storage and linking with posts  

- **RESTful APIs & Method Override**  
  - Learned how HTML forms only support `GET` & `POST`  
  - Used `method-override` to enable `PUT` & `DELETE` operations  

- **Unique Identifiers with UUID**  
  - Ensured every post has a unique ID for editing and deleting  

- **DOM Manipulation Concepts (Frontend)**  
  - Practiced how buttons interact with backend logic  
  - Toggling features like like/dislike buttons (future extension)  

---

## ✨ Features
- 📝 Create posts with **username, description, and optional image**.  
- 📂 Upload and store images locally with **Multer**.  
- 👀 View all posts on a dynamic homepage.  
- 🔎 View posts by specific users with **query parameters**.  
- 📑 View details of individual posts.  
- ✏️ Edit post descriptions.  
- 🗑️ Delete posts.  
- 🚫 Handle non-existent users gracefully (custom 404 page).  

---

## 🧰 Tech Stack & Packages Used
**Backend:**  
- [Node.js](https://nodejs.org/)  
- [Express.js](https://expressjs.com/)  

**Templating Engine:**  
- [EJS](https://ejs.co/)  

**Middleware & Utilities:**  
- [Multer](https://github.com/expressjs/multer) → File/image upload handling  
- [Method-Override](https://www.npmjs.com/package/method-override) → For using PUT/PATCH/DELETE in forms  
- [UUID](https://www.npmjs.com/package/uuid) → Unique ID generation  

---

## 📂 Project Structure
```

ReST-project/
│
├── node_modules/
├── public/
│   ├── assets/
│   ├── uploads/
│   ├── detailStyles.css
│   ├── editStyles.css
│   ├── formStyles.css
│   ├── homeStyles.css
│   ├── myPosts.css
│   └── noUserStyles.css
│
├── views/
│   ├── Detail.ejs
│   ├── Edit.ejs
│   ├── Form.ejs
│   ├── Home.ejs
│   ├── myPosts.ejs
│   └── NoUser.ejs
│
├── .gitignore
├── data.json
├── index.js
├── package.json
├── package-lock.json
└── Readme.md

````

---

## ⚙️ Setup & Installation

Follow these steps to set up **Post Villa** locally:

1. **Clone the repository**
   ```bash
   git clone <https://github.com/dwivediprashant/post_Villa_Quora_Inspired.git>
   cd ReST-project
  ````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the server**

   ```bash
   node index.js
   ```

   or (with nodemon)

   ```bash
   npx nodemon index.js
   ```

4. **Open in browser**

   ```
   http://localhost:3000/posts
   ```

---