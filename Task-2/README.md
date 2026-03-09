# Shopping Cart Indicator (React)

## 📌 Project Overview

This project is a simple **React-based Shopping Cart Indicator** that demonstrates how to manage and share state between multiple components. The application includes a button that allows users to add items to a cart and a component that displays the current number of items in the cart.

The project helps illustrate core React concepts such as **state management, component communication, and props**.

---

## 🎯 Features

* Add items to the cart using a button
* Dynamically update the cart count
* Display cart count in a separate component
* Clean and modular component-based structure

---

## 🧰 Technologies Used

* React.js
* JavaScript (ES6)
* HTML5
* CSS3

---

## 📂 Project Structure

```
src
│
├── components
│   ├── CartDisplay.js
│   └── AddItemButton.js
│
├── App.js
├── index.js
└── README.md
```

---

## ⚙️ Installation and Setup

1. Clone the repository

```
git clone https://github.com/your-username/shopping-cart-indicator.git
```

2. Navigate to the project directory

```
cd shopping-cart-indicator
```

3. Install dependencies

```
npm install
```

4. Start the development server

```
npm start
```

The application will run at:

```
http://localhost:3000
```

---

## 🧩 Components Explanation

### App Component

The **App component** acts as the parent component and manages the state of the cart using React's `useState` hook.

### AddItemButton Component

This component renders the **Add Item** button and triggers the function that increases the cart count.

### CartDisplay Component

This component receives the cart count as **props** and displays the total number of items currently in the cart.

---

## 🔄 Working of the Application

1. The cart count is initialized to **0** using `useState`.
2. When the user clicks the **Add Item** button, the `addItem` function is executed.
3. The function updates the state using `setCartCount`.
4. The updated value is passed to the **CartDisplay** component via props.
5. The UI re-renders automatically to show the updated cart count.

---

## 📚 Concepts Demonstrated

* React Functional Components
* React Hooks (`useState`)
* Props for component communication
* Component-based architecture

---

## 🚀 Future Improvements

* Add remove item functionality
* Add product listing
* Store cart items using local storage
* Integrate with backend APIs

---

## 👨‍💻 Author

Ankush Kr.
B.E CSE (Information Security)

---
