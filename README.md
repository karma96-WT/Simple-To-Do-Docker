# 📝 Simple To-Do App

A lightweight, responsive To-Do application built with HTML, Tailwind CSS, and Vanilla JavaScript. The project is fully containerized using Nginx and Docker for fast and effortless setup across any environment.

---

## 🚀 Features

* **Add Tasks:** Quickly add new tasks to your list with input validation.
* **Delete Tasks:** Remove individual completed or unwanted tasks.
* **Responsive Design:** Clean UI styled with Tailwind CSS.
* **Dockerized:** Packaged with Nginx for lightweight static file serving.

---

## 🛠️ Prerequisites

Before getting started, make sure you have the following installed on your machine:

* [Git](https://git-scm.com/)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) *(if running via Docker)*
* Any modern web browser

---

## 📥 How to Pull and Run

### Option 1: Running with Docker (Recommended)

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/karma96-WT/Simple-To-Do-Docker.git
   cd Simple-To-Do-Docker
   ```

2. **Build the Docker Image:**
   ```bash
   docker build -t simple-todo-app .
   ```

3. **Run the Docker Container:**
   ```bash
   docker run -d -p 8085:80 --name my-todo simple-todo-app
   ```

4. **Open in Browser:**  
   Navigate to **`http://localhost:8085`** in your browser.

---

### Option 2: Running Directly (Without Docker)

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Open the App:**
   * Double-click `index.html` to open it directly in your browser, **OR**
   * Use VS Code's **Live Server** extension to launch the app.

---

## 🛑 Stopping & Cleaning Up Container

To stop and remove the running Docker container:

```bash
# Stop the container
docker stop my-todo

# Remove the container
docker rm my-todo
```

---

## 📂 Project Structure

```text
.
├── index.html       # App layout & markup
├── script.js        # Core app logic (DOM & state management)
├── style.css        # Custom styles / Tailwind imports
├── Dockerfile       # Nginx image setup
└── README.md        # Project documentation
```
