# 🛒 FakeStore E-Commerce App

Welcome to the **FakeStore E-Commerce App**! This is a dynamic front-end application built with **React**, **React Router**, and **FakeStoreAPI**. It demonstrates how to fetch, create, update, and delete products via API, while maintaining a modern component-based architecture.

---

## ✨ Project Objectives

- ✅ Structure a React application with reusable components.
- ✅ Manage state using `useState`.
- ✅ Interact with an external API using `Axios` or `Fetch`.
- ✅ Implement multi-page navigation using `React Router`.
- ✅ Style components responsively using `React Bootstrap`.
- ✅ Handle loading states, errors, and API responses effectively.

---

## 📌 Project Structure & Requirements

### 🏠 Home Page (`/`)
- Welcome message introducing the store.
- Button linking to the Product Listing page.
- Styled with **React Bootstrap**.

---

### 🛍 Product Listing Page (`/products`)
- Fetch and display products from [FakeStoreAPI](https://fakestoreapi.com/).
- Each product includes:
  - 🖼️ Image
  - 🏷️ Title
  - 💲 Price
  - 🔍 Button to view details
- Utilizes **React Router** for navigation.

---

### 📄 Product Details Page (`/products/:id`)
- Shows detailed product info using `useParams()`.
- Fetches product data from [FakeStoreAPI](https://fakestoreapi.com/products/:id).
- Displays:
  - Image
  - Title
  - Description
  - Category
  - Price
- Includes:
  - ➕ Button to add to cart (optional)
  - 🗑️ Button to delete product
- Handles loading and error states.

---

### ➕ Add Product Page (`/add-product`)
- Form for creating a new product (**POST** request).
- Fields:
  - Title
  - Price
  - Description
  - Category
- Displays confirmation message on success.
- Uses **React Bootstrap** forms.

---

### ✏️ Edit Product Page (`/edit-product/:id`)
- Pre-filled form with existing product data (**PUT** request).
- Update product info and show a success message.

---

### 🗑 Delete Product Functionality
- Delete product using a **DELETE** request.
- Confirmation modal before deletion.
- Redirects to Product Listing after deletion.

---

### 🧭 Navigation Bar
- Persistent **React Bootstrap** navbar across all pages.
- Includes links to:
  - Home
  - Product Listing
  - Add Product
- Fully responsive for mobile view.

---

### 🛠 Additional Features
- ✅ Loading indicators while fetching data.
- ✅ User-friendly error messages for API failures.
- ✅ Fully responsive layout using **React Bootstrap**.

---

### 📦 Dependencies
- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Bootstrap](https://getbootstrap.com/)
- [FakeStoreAPI](https://fakestoreapi.com/)
