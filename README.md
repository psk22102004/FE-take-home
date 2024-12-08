### README: Dynamic Themed Table, Filters, Pagination, and Dropdown in React

---

## 📖 **Project Overview**
This project demonstrates a React-based application with dynamic theming and essential UI components. The core features include a **table**, **pagination**, **dropdown**, and **filters**, all of which support real-time theme updates and user interaction. It's designed with flexibility, performance, and usability in mind.

---

## 🚀 **Features**
1. **Dynamic Theming:**
   - Multiple predefined themes (e.g., Light, 80s After Dark, Black Panther).
   - Real-time updates across components (Table, Pagination, Filters, Dropdown).

2. **Table:**
   - Displays dynamic data based on provided rows and columns.
   - Alternating row colors and responsive design.
   - Theme-compatible styling for text and background.

3. **Pagination:**
   - Swiper-based slider for navigating multiple pages.
   - Dynamic styling based on the theme.
   - Supports next/previous navigation with disabled state management.

4. **Filters:**
   - Search by ID.
   - Limit rows display.
   - Sort data in ascending or descending order.
   - Select theme using a dropdown.

5. **Dropdown:**
   - Customizable dropdown with dynamic theme styling.
   - Smooth UI with flexibility for content selection.

---

## 🛠️ **Tech Stack**
- **Frontend:**
  - React (with functional components and hooks).
  - Tailwind CSS for styling.
  - Swiper.js for pagination slider.
- **Language:**
  - JavaScript (ES6+).
- **Dependencies:**
  - Tailwind CSS
  - Swiper.js

---

## 📂 **Folder Structure**
```
src/
├── Components/
│   ├── TableComponent.jsx
│   ├── Pagination.jsx
│   ├── FiltersTab.jsx
│   ├── Dropdown.jsx
├── App.jsx
├── index.css
├── index.js
```

---

## 🛠️ **Installation**

1. Clone the repository
  

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 🌈 **How to Use**
1. **Run the App:**
   - Start the application and open it in your browser at `http://localhost:5173`.

2. **Apply Filters:**
   - Use the search bar to filter data by ID.
   - Change the number of rows displayed by updating the limit field.
   - Sort data using the ascending/descending buttons.

3. **Change Theme:**
   - Select a theme from the "Select Theme" dropdown. The entire app updates in real-time based on your choice.

4. **Pagination:**
   - Navigate between pages using the pagination slider or the next/previous buttons.

5. **Dropdown:**
   - Select options dynamically using the dropdown component, with the selected option reflecting your choice.

---



## ✨ **Customization**
You can add more themes or update existing ones by modifying the `themes` array in the `FiltersTab` component:
```javascript
const themes = [
  { name: "Light", value: { background: "#ffffff", font: "#000000" } },
  { name: "New Theme", value: { background: "#exampleColor", font: "#exampleFont" } },
];
```

---

## 🔗 **Dependencies**
Ensure you have the following dependencies installed:
```bash
npm install react swiper tailwindcss
```

---

## 🤝 **Contributing**
Contributions are welcome! Feel free to open issues or submit pull requests.


