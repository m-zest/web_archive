
# 🌐 Web Archive Viewer

A **web-based archive viewer** that allows users to **view**, **save**, and **track** web pages in a clean and secure interface.

## 🚀 Features

* 🔍 **View Websites**: Enter any URL to fetch and view a live website.
* 🖥️ **Render Exactly as Online**: View the page as it appears online inside a secure iframe.
* 💾 **Save Web Pages**: Download any webpage as an HTML file for offline use.
* 🕒 **Recent Searches**: Automatically tracks your latest visited URLs.

## ⚙️ How It Works

1. **Input a URL** into the search bar.
2. The app fetches the site using a **CORS proxy** to bypass cross-origin restrictions.
3. The webpage is rendered in a **sandboxed iframe** for secure viewing.
4. Users can **download** the HTML content locally.
5. **Recent searches** are saved in the browser’s **localStorage**.

## 🛠️ Tech Stack

### Frontend

* **React** (with TypeScript) – Component-based UI architecture
* **Tailwind CSS** – Fast and responsive styling
* **Lucide React** – Elegant icon system

### Functionality

* **CORS Proxy** – Handles cross-origin HTTP requests
* **LocalStorage** – Stores recent search history in the browser

### Security

* ✅ **Sandboxed iframes**: Isolate third-party site content
* ✅ **URL validation & sanitization**: Prevent injection attacks
* ✅ **Secure HTML downloads**: Cleanly save webpage content without scripts

## 📂 Project Structure

```
📦 archive-viewer/
 ┣ 📁 public/
 ┣ 📁 src/
 ┃ ┣ 📁 components/
 ┃ ┣ 📁 utils/
 ┃ ┣ 📄 App.tsx
 ┃ ┣ 📄 main.tsx
 ┃ ┣ 📄 index.css
 ┣ 📄 package.json
 ┣ 📄 tailwind.config.js
 ┗ 📄 README.md
```

## 🧪 Getting Started

### Prerequisites

* Node.js ≥ 16
* npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/archive-viewer.git

# Navigate into the directory
cd archive-viewer

# Install dependencies
npm install

# Start development server
npm run dev
```


## 🔒 Security Considerations

* Uses an iframe with `sandbox` attributes to securely load external content.
* Validates and sanitizes user-entered URLs before fetching.
* Avoids executing third-party scripts when saving pages.

## 💡 Future Enhancements

* Add user authentication and cloud-based saved pages
* Implement search and tagging for saved web pages
* Dark mode toggle
* Support for archiving PDFs or screenshots



