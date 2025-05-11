# 📦 KiTechnAPI

### ✨ A Simple and Clean ⚙️ C-R-U-D 📝 Application

KiTechnAPI is a simple and clean CRUD application designed to manage recipes efficiently.
Built with Node.js, Express, and Mongoose (MongoDB) and It follows the MVC architecture and Uses Postman for
API testing and documentation and Tailwind for UI.

---

## 🚀 Features

- 📝 **CRUD Operations** - Create, read, update, and delete recipes.
- 🧠 **MVC Architecture** - Clean and scalable code organization.
- 🔀 **RESTful Routes** - Clean, structured endpoints for handling CRUD operations via HTTP methods.
- 🍃 **MongoDB Integration** - Uses Mongoose for schema-based modeling.
- 🖼️ **EJS Templating** - Dynamic and reusable UI with Embedded JavaScript templates.
- 🛡️ **Middleware Support** - Custom and Express middlewares for better control.
- 📬 **Postman Collection** - Pre-configured collection for testing all endpoints with ease.
- 🗂️ **Modular Project Structure** - Scalable and organized codebase ready for expansion.
- 🚨 **Error Handling** - Displays Messages for API Errors and No-Results Scenarios.

---

## Built With 🛠️

- 🧠 **Node.js** – Backend JavaScript Runtime Environment.
- 🔀 **Express.js** – Web Framework for routing and middleware.
- 🍃 **Mongoose (MongoDB)** – ODM for interacting with MongoDB Database.
- 🎨 **Tailwind CSS** – Utility-first CSS framework for crafting Modern & UI.
- 📬 **Postman** – Tool for API Testing and Documentation.
- ♻️ **nodemon** – Dev tool for auto-restarting server on changes.
- 🧩 **EJS** – Templating engine for rendering dynamic views.
- 🌱 **dotenv** – Loads environment variables from `.env`

---

## API Endpoints 📮

| Method | Endpoint             | Description         | Request Body | Response            |
| ------ | -------------------- | ------------------- | ------------ | ------------------- |
| GET    | `/recipes`           | Get all recipes     | ❌           | ✅ List of recipes  |
| GET    | `/recipes/:id`       | Get recipe by ID    | ❌           | ✅ Single recipe    |
| POST   | `/recipes`           | Create a new recipe | ✅ JSON data | ✅ Created recipe   |
| PUT    | `/recipes/:recipeID` | Update recipe by ID | ✅ JSON data | ✅ Updated recipe   |
| DELETE | `/recipes/:recipeID` | Delete recipe by ID | ❌           | ✅ Deletion message |

---

## Deployed App 🚀

#### For Live Demo Click the Below Link ⬇️ <br/>

🌐 Live URL : https://kitechnapi.onrender.com/

---

## API Documentation 📬

#### Explore the KiTechnAPI endpoints using Postman ⬇️ <br/>

1. 🛠️ Open Postman.
2. 📂 Import the `postmanAPI.json` Postman collection from the `docs/` folder.
3. 🔀 Test the available API endpoints directly from Postman.

---

## Project Structure 🗂️

```bash
KiTechnAPI/
├── 📂 config/           # ⚙️ Configuration files (e.g., DB connection)
├── 📂 controllers/      # 🧠 Controller Functions
├── 📂 middlewares/      # 🛡️ Custom middleware (e.g., Error Handling)
├── 📂 models/           # 🛢️ Mongoose Schemas and Data Models
├── 📂 routers/          # 🛣️ Express route Definitions
├── 📂 views/            # 🎨 EJS templates for Rendering Views
├── 📂 public/           # 🌐 Public assets (e.g., CSS, images)
│   ├── 📂 css/          # 🎨 Compiled CSS and Tailwind files
│   └── 📂 images/       # 🖼️ Static image assets
├── 📂 docs/             # 📚 Postman collection and documentation
├── 📄 app.js            # 🚀 Additional Application Logic
├── 📄 main.js           # 🧩 Main application entry point & server setup
├── 📄 package.json      # 📦 Project Dependencies
├── 📄 package-lock.json # 🔒 Exact versions of Installed Dependencies
├── 📄 README.md         # 📝 Project Overview and Setup Instructions
├── 📄 .gitignore        # 🚫 Specifies Files and Directories to Ignore in Git
└── 📄 .env              # 🌱 Environment Variables (e.g., DB URL, PORT, Secrets)

```

---

## Project Configurations ⚙️

### 📦 1. Initialize Node Project

```bash
 npm init
```

🛠️ Sets up your Project with Default Settings.

### 🚀 2. Install Core Dependencies

```bash
npm install express
npm install mongoose
npm install dotenv
npm install ejs
```

- `express` – 🔀 Web Framework for routing and middleware.
- `mongoose` – 🍃 ODM for interacting with MongoDB Database.
- `dotenv` – 🌱 Load environment variables from .env
- `ejs` – 🧩 Template engine for dynamic HTML rendering

### 🔄 3. Install Dev Dependency

```bash
 npm install nodemon
```

- `nodemon` – ♻️Automatically restarts server on file changes

### 🎨 4. Setup Tailwind CSS

#### 📥 Step-1. Install Tailwind CSS

```bash
 npm install tailwindcss @tailwindcss/cli
```

- `tailwindcss` – 🎨 Utility-first CSS framework for styling.
- `@tailwindcss/cli` – 🛠️ CLI tool for compiling Tailwind styles.

#### 📄 Step-2. Create and Import Tailwind in Input File

Inside `config/tailwindConfig.css`, add the following:

```bash
@import "tailwindcss";
```

- 🧩 This file acts as the input source for Tailwind to generate final CSS.

#### 🛠️ Step-3. Update the Build Script in `package.json`

```bash
"scripts": {
    "start": "nodemon main.js",
    "build": "npx @tailwindcss/cli -i ./config/tailwindConfig.css -o ./public/css/style.css --watch"
  }
```

- 🔄 This script will watch for changes and regenerate final `style.css`.

#### 🎨 Step-4. Build Tailwind CSS

```bash
  npm run build
```

- 🔧 Compiles Tailwind CSS into a single `style.css` inside the `public/css folder`.

### 🧩 5. Start the Server

```bash
  npm start
```

▶️ Runs the server using your defined start script in package.json.

---

## Getting Started 🚀

### 📋 1. Requirments

- ✅ Node.js Installed
- ✅ MongoDB installed (Local or Cloud - MongoDB Atlas)

### 📦 2. Installation

Clone the repository

```bash
git clone https://github.com/samikannup53/KiTechnAPI.git
```

Move into the project directory

```bash
cd KiTechnAPI
```

Install all dependencies

```bash
npm install
```

### 🔐 3. Environment Setup

Create a `.env` file in the root directory with the following content:

```bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017/kiTechnAPI (Your MongoDB URL)
```

### 🎨 4. Build Tailwind CSS

```bash
  npm run build
```

- 🧵 Compiles Tailwind styles into `public/css/style.css`. Run this after installing dependencies.

### ▶️ 5. Run the Application

```bash
npm start
```

🌐 The server will start at: http://localhost:3000

---

<h3 align= 'center' style="color: fuchsia"><b>👀 Thanks for Exploring My Repository! 💖</b></h3>
