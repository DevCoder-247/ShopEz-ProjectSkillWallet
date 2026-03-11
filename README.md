<div align="center">
  <h1>🛍️ ShopEZ – Modern E‑Commerce Platform</h1>
  <p>
    <strong>Full‑stack solution built with Node.js, Express, MongoDB & React</strong>
  </p>
  <p>
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-team-assignments">Team Assignments</a> •
    <a href="#-api-documentation">API Docs</a>
  </p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/node.js-18.x-green?logo=node.js" alt="Node.js">
    <img src="https://img.shields.io/badge/express-4.x-blue" alt="Express">
    <img src="https://img.shields.io/badge/mongoDB-6.x-brightgreen?logo=mongodb" alt="MongoDB">
    <img src="https://img.shields.io/badge/react-18.x-61DAFB?logo=react" alt="React">
    <img src="https://img.shields.io/badge/license-MIT-yellow" alt="License">
  </p>
</div>

---

## ✨ Features

- **User Authentication** – JWT based signup / login, role management (user/admin)
- **Product Catalog** – Browse, search, filter, and view product details with reviews
- **Shopping Cart** – Add/remove items, update quantities, persistent cart
- **Checkout & Payments** – Integrated with Stripe / Razorpay (configurable)
- **Order Management** – View order history, order status, admin order updates
- **Admin Dashboard** – Manage products, orders, users; view sales statistics
- **Responsive UI** – Built with React, works on desktop and mobile

---

## 🧰 Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| **Backend** | Node.js, Express.js, MongoDB (Mongoose) |
| **Frontend**| React, React Router, Axios          |
| **Auth**    | JSON Web Tokens (JWT)               |
| **Payments**| Stripe / Razorpay (configurable)    |
| **DevOps**  | dotenv, nodemon, concurrently        |

---

## 🚀 Getting Started

### Prerequisites

- Node.js **18.x** or higher
- MongoDB (local instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- npm **9.x** or higher

### Installation

#### 1. Clone the repository

```bash
git clone <repository-url>
cd shopez-ecommerce
```

#### 2. Install backend dependencies

```bash
cd backend
npm install
```

#### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

#### 4. Configure environment variables

Copy the example environment files and fill in your own values.

**Backend**  
```bash
cd ../backend
cp .env.example .env
```

**Frontend**  
```bash
cd ../frontend
cp .env.example .env
```

> **Note:** The `.env` files contain sensitive information. Never commit them to version control.

### Running the Application

#### Start Backend (development)

```bash
cd backend
npm run dev
```

The API will be available at `http://localhost:5000`.

#### Start Frontend (development)

```bash
cd frontend
npm start
```

The React app will open at `http://localhost:3000`.

---

## 👥 Team Assignments

Work is split by **feature domain** – each team member owns their feature end‑to‑end (model → service → controller → routes → frontend page → API calls).

### Abhay – Auth & User Management

| Backend File                             | Task Description                                   |
|------------------------------------------|----------------------------------------------------|
| `backend/src/models/User.js`             | Define User schema (name, email, password, role, timestamps) |
| `backend/src/controllers/authController.js` | `register`, `login`, `logout`, `getMe`              |
| `backend/src/controllers/userController.js` | `getUserProfile`, `updateUserProfile`, `changePassword` |
| `backend/src/services/authService.js`    | `registerUser`, `loginUser`, token validation logic  |
| `backend/src/routes/authRoutes.js`       | `POST /api/auth/register`, `/login`, `/logout`, `/me` |
| `backend/src/routes/userRoutes.js`       | `GET /PUT /api/users/profile`                        |
| `backend/src/middleware/authMiddleware.js`| Verify JWT, attach user to request                   |
| `backend/src/middleware/roleMiddleware.js`| Restrict routes by role                              |
| `backend/src/validators/authValidator.js`| Validate register/login request body                 |
| `backend/tests/auth.test.js`             | Unit + integration tests for auth flows              |

| Frontend File                             | Task Description                                   |
|-------------------------------------------|----------------------------------------------------|
| `frontend/src/pages/Login/Login.jsx`     | Login form, call `authApi.login`, store token       |
| `frontend/src/pages/Register/Register.jsx`| Register form, call `authApi.register`              |
| `frontend/src/context/AuthContext.jsx`   | Global auth state (user, login, logout)             |
| `frontend/src/hooks/useAuth.js`           | Expose AuthContext via hook                          |
| `frontend/src/api/authApi.js`             | `login()`, `register()`, `logout()`, `getMe()`      |

---

### Aditi – Products & Catalog

| Backend File                               | Task Description                                   |
|--------------------------------------------|----------------------------------------------------|
| `backend/src/models/Product.js`            | Define Product schema (name, price, category, stock, images, reviews) |
| `backend/src/models/Category.js`           | Define Category schema (name, slug, description)   |
| `backend/src/models/Review.js`             | Define Review schema (user, product, rating, comment) |
| `backend/src/controllers/productController.js` | `getAllProducts`, `getProductById`, `createProduct`, `updateProduct`, `deleteProduct` |
| `backend/src/services/productService.js`   | Product CRUD + search/filter logic                  |
| `backend/src/routes/productRoutes.js`      | `GET /api/products`, `POST/PUT/DELETE /api/products/:id` |
| `backend/src/routes/reviewRoutes.js`       | `POST /api/products/:id/reviews`                    |
| `backend/src/middleware/uploadMiddleware.js`| Multer config for product image uploads             |
| `backend/src/validators/productValidator.js`| Validate product create/update body                 |
| `backend/tests/product.test.js`             | Unit + integration tests for product APIs           |

| Frontend File                                | Task Description                                   |
|----------------------------------------------|----------------------------------------------------|
| `frontend/src/pages/Products/Products.jsx` | Product listing page with search/filter             |
| `frontend/src/pages/ProductDetail/ProductDetail.jsx` | Single product detail + Add to Cart button       |
| `frontend/src/components/ProductCard/ProductCard.jsx` | Reusable product card component                   |
| `frontend/src/components/ProductList/ProductList.jsx` | Grid/list of ProductCards                         |
| `frontend/src/components/Loader.jsx`        | Loading spinner component                           |
| `frontend/src/api/productApi.js`            | `getProducts()`, `getProductById()`, `createProduct()` etc. |

---

### Abhishek – Cart & Checkout / Payment

| Backend File                               | Task Description                                   |
|--------------------------------------------|----------------------------------------------------|
| `backend/src/models/Cart.js`               | Define Cart schema (user, items: [{product, quantity}]) |
| `backend/src/controllers/cartController.js` | `getCart`, `addToCart`, `updateCartItem`, `removeFromCart`, `clearCart` |
| `backend/src/controllers/paymentController.js` | `initiatePayment`, `verifyPayment`, webhook handler |
| `backend/src/services/cartService.js`      | Cart business logic                                 |
| `backend/src/services/paymentService.js`   | Stripe/Razorpay integration                         |
| `backend/src/routes/cartRoutes.js`         | `GET /POST /PUT /DELETE /api/cart`                  |

| Frontend File                                | Task Description                                   |
|----------------------------------------------|----------------------------------------------------|
| `frontend/src/pages/Cart/Cart.jsx`         | Cart page (list items, update qty, remove, show total) |
| `frontend/src/pages/Checkout/Checkout.jsx` | Checkout form + payment integration                 |
| `frontend/src/components/CartItem/CartItem.jsx` | Single cart item row component                     |
| `frontend/src/context/CartContext.jsx`     | Global cart state (items, add, remove, clear)       |
| `frontend/src/api/cartApi.js`               | `getCart()`, `addToCart()`, `updateCartItem()`, `removeFromCart()` |

---

### Abhilash – Orders & Admin

| Backend File                               | Task Description                                   |
|--------------------------------------------|----------------------------------------------------|
| `backend/src/models/Order.js`              | Define Order schema (user, items, shippingAddress, paymentInfo, status) |
| `backend/src/controllers/orderController.js` | `createOrder`, `getMyOrders`, `getOrderById`, `updateOrderStatus` |
| `backend/src/controllers/adminController.js` | `getDashboardStats`, `listAllUsers`, `listAllOrders`, `listAllProducts` |
| `backend/src/services/orderService.js`     | Order creation, stock deduction, status transitions |
| `backend/src/routes/orderRoutes.js`        | `POST /api/orders`, `GET /api/orders/mine`, `GET/PUT /api/orders/:id` |
| `backend/src/routes/adminRoutes.js`        | All `/api/admin/*` routes (admin role protected)    |
| `backend/src/validators/orderValidator.js` | Validate order creation body                        |
| `backend/tests/order.test.js`              | Unit + integration tests for order APIs             |

| Frontend File                                | Task Description                                   |
|----------------------------------------------|----------------------------------------------------|
| `frontend/src/pages/Orders/Orders.jsx`     | My orders list with status badges                   |
| `frontend/src/pages/Admin/AdminDashboard.jsx` | Stats overview (total orders, revenue, users, products) |
| `frontend/src/pages/Admin/ManageProducts.jsx` | Admin CRUD interface for products                   |
| `frontend/src/pages/Admin/ManageOrders.jsx` | Admin table to view and update order statuses       |
| `frontend/src/components/Navbar/Navbar.jsx` | Top nav with links, cart icon, user menu            |
| `frontend/src/api/orderApi.js`              | `createOrder()`, `getMyOrders()`, `getOrderById()`, `updateOrderStatus()` |

---

## 📚 API Documentation

The complete API documentation is available in [`docs/API-docs.md`](docs/API-docs.md).  
It includes all endpoints, request/response examples, and authentication requirements.  
(To be filled in by the backend team.)

---

## 📁 Project Structure

```
shopez-ecommerce/
├── backend/               # Node.js + Express + MongoDB REST API
│   ├── src/
│   │   ├── models/        # Mongoose models
│   │   ├── controllers/    # Route handlers
│   │   ├── services/       # Business logic
│   │   ├── routes/         # Express routes
│   │   ├── middleware/     # Custom middleware (auth, upload, etc.)
│   │   ├── validators/     # Request validation
│   │   └── utils/          # Helpers, constants
│   ├── tests/              # Unit & integration tests
│   └── server.js           # Entry point
├── frontend/               # React SPA
│   ├── public/
│   ├── src/
│   │   ├── pages/          # Page components
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # React context providers
│   │   ├── hooks/          # Custom hooks
│   │   ├── api/            # API client functions
│   │   └── App.js          # Root component
│   └── package.json
├── docs/                   # ER diagram, API docs, etc.
└── README.md               # This file
```

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Built with ❤️ by Abhay, Aditi, Abhishek & Abhilash</sub>
</div>