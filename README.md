# 📦 Ecommerce-Backend – RESTful API for Sales Management System  

## 🚀 Introduction  
**Ecommerce-Backend-API** is a backend project built with **Node.js (Express.js)** and **MongoDB**, providing APIs for managing products, orders, users, statistics, and more.  

The system is designed with **RESTful API architecture**, optimized MongoDB structure to reduce query time, and can be easily extended or integrated with frontend applications.  


<p align="center">
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-v18-green.svg" alt="Node.js"></a>
  <a href="https://expressjs.com/">
    <img src="https://img.shields.io/badge/Express.js-v4.18-blue.svg" alt="Express.js"></a>
  <a href="https://www.mongodb.com/">
    <img src="https://img.shields.io/badge/MongoDB-v6.x-brightgreen.svg" alt="MongoDB"></a>
  <a href="https://jwt.io/">
    <img src="https://img.shields.io/badge/Auth-JWT%20%7C%20Passport-yellow.svg" alt="Auth"></a>
  <a href="https://www.docker.com/">
    <img src="https://img.shields.io/badge/Docker-Container-blue.svg" alt="Docker"></a>
  <a href="https://www.postman.com/">
    <img src="https://img.shields.io/badge/Postman-API%20Testing-orange.svg" alt="Postman"></a>
</p>

<h4 align="center">
  A Node.js (Express.js) and MongoDB backend providing RESTful APIs for product, order, and user management.<br>
  Optimized for performance, scalability, and real-world e-commerce systems.
</h4>

<p align="center">
 <a href="#features">Features</a> •
 <a href="#Upcoming Features">Upcoming Features</a> •
 <a href="#prerequisites">Prerequisites</a> •
 <a href="#getting-started">Getting Started</a> •
 <a href="#api-routes">API Routes</a> •
 <a href="#api-usage">API Usage</a> •
 <a href="#built-with">Built With</a> 
</p>


---

## 🚀 Features

- **Authentication & Authorization** 🔐
  - Register, login, JWT authentication, role-based access control.
- **Product Management** 🛒
  - CRUD operations for products.
- **Order Management** 📦
  - Create, view, and manage orders with status updates.
- **Statistics & Reports** 📈
  - Sales & revenue analytics.
- **QR Code Support** 🔗
  - Generate QR codes for products/orders.
- **Timekeeping** ⏱
  - Record staff working hours.

---

## 🔮 Upcoming Features  
🛡️ **Admin Account Management**  
- Create / delete / update admin accounts  

👥 **User Role & Permissions**  
- Super Admin / Manager / Staff  

📦 **Inventory Management**  
- Track product quantities  
- Low-stock alerts  

📋 **Customer Management**  
- Customer list  
- Customer details (Name, Email, Phone)  

🛒 **Purchase History**  
- Store and retrieve past orders  

---

## 🌀 Prerequisites

Ensure you have installed:

- [Node.js v18+](https://nodejs.org/)  
- [MongoDB](https://www.mongodb.com/)  
- [Postman](https://www.postman.com/)  

---

## ⚙️ Getting Started

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/web-apiss.git
   cd web-apiss
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create `.env` file:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password
   ```

4. **Run Server**
   ```bash
   npm start
   ```

5. **Test API**
   ```
   http://localhost:5201/api/
   ```

---

## 📌 API Routes

All routes are prefixed with `/api/v1/`

| **Resource**   | **Route**        | **Methods**              |
| -------------- | ---------------- | ------------------------ |
| **Products**   | `/menuitems`     | GET, POST, PATCH, DELETE |
| **Orders**     | `/orders`        | GET, POST, PATCH         |
| **Users**      | `/users`         | GET, POST, PATCH, DELETE |
| **Auth**       | `/users/login`   | POST                     |
| **Customers**  | `/customers`     | GET, POST, PATCH, DELETE |
| **Statistics** | `/statistics`    | GET                      |
| **QR Codes**   | `/qrcode`        | GET, POST                |

---

## 🧪 API Usage

Set Postman environment:

```
- {{URL}} = http://localhost:5201/api/users/all
- {{TOKEN}} = your JWT token
```

Example request:
```http
POST {{URL}}/users/login
Content-Type: application/json
{
  "email": "thanhbjnk777@gmail.com",
  "password": "123456"
}
```

---

## 🛠 Built With

- [NodeJS](https://nodejs.org/en/) - JavaScript runtime  
- [Express](http://expressjs.com/) - Web framework  
- [MongoDB](https://www.mongodb.com/) - NoSQL database  
- [Mongoose](https://mongoosejs.com/) - ODM for MongoDB  
- [JWT & Passport](https://jwt.io/) - Authentication    
- [Postman](https://www.postman.com/) - API testing  
