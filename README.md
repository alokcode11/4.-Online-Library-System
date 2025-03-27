# Online Library System

## 📌 Overview
The **Online Library System** is a web-based application built with React and Redux that allows users to manage a collection of books efficiently. Users can add, update, delete, and search for books. The application uses **local storage** for data persistence, eliminating the need for a backend.

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript, React, Redux
- **State Management:** Redux
- **Storage:** Local Storage (No Backend)
- **Build Tool:** Vite

## 🎯 Features
- 📖 Add new books with details (title, author, genre, etc.)
- ✏️ Edit book information
- 🗑️ Delete books from the collection
- 🔍 Search and filter books
- 💾 Persist data using local storage

## 🚀 Installation and Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/alokcode11/4.-Online-Library-System
   cd online-library-system
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```

4. **Open the app in your browser**
   ```sh
   http://localhost:5173
   ```

## 📂 Project Structure
```
📦 online-library-system
├── 📂 public
│   ├── 📂 images         # Static images
│   ├── 📜 vite.svg       # Vite logo
├── 📂 src
│   ├── 📂 assets         # Additional assets (icons, images, etc.)
│   ├── 📂 components     # Reusable components
│   ├── 📂 data           # Static or mock data files
│   ├── 📂 pages          # Main pages (Home, Add Book, Edit Book, etc.)
│   ├── 📂 redux          # Redux store, actions, and reducers
│   ├── 📜 App.css        # Global styling
│   ├── 📜 App.jsx        # Main application component
│   ├── 📜 index.css      # Additional global styles
│   ├── 📜 main.jsx       # Entry point
├── 📜 .gitignore         # Files to be ignored in version control
├── 📜 eslint.config.js   # ESLint configuration
├── 📜 index.html         # Main HTML file
├── 📜 package-lock.json  # Dependency lock file
├── 📜 package.json       # Project dependencies and scripts
├── 📜 README.md          # Project documentation
├── 📜 vite.config.js     # Vite configuration
```

## 🔧 How to Use
1. **Add a Book**: Click on "Add Book" and enter book details.
2. **Edit a Book**: Click on "Edit" next to a book and update details.
3. **Delete a Book**: Click on "Delete" to remove a book from the list.
4. **Search & Filter**: Use the search bar to find books quickly.

## 📌 Future Enhancements
- ⭐ Add user authentication
- 📊 Implement book categories
- 🌟 Improve UI/UX with animations

## 🤝 Contributing
Feel free to contribute to the project by opening an issue or submitting a pull request!

## 📜 License
This project is open-source and available under the MIT License.

---

🚀 Happy Coding!