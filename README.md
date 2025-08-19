# 📦 Web-APISS – RESTful API for Sales Management System  

## 🚀 Introduction  
**Web-APISS** is a backend project built with **Node.js (Express.js)** and **MongoDB**, providing APIs for managing products, orders, users, statistics, and more.  

The system is designed with **RESTful API architecture**, optimized MongoDB structure to reduce query time, and can be easily extended or integrated with frontend applications.  

---

## 🛠️ Tech Stack  
- **Backend**: Node.js (Express.js)  
- **Database**: MongoDB  
- **Authentication**: Passport.js  
- **API Testing**: Postman  
- **Utilities**: QRCode, Mailer  

---

## ⚡ Current Features  
✅ **Product Management (MenuItem)** – CRUD (create, read, update, delete)  
✅ **Order Management (Order)** – Create, view, update status  
✅ **User Management (User)** – Register, login, manage profile  
✅ **Statistics & Reports (Statistics)** – Revenue and sales summary  
✅ **QR Code (QRCode)** – Generate and manage QR codes  
✅ **Timekeeping (Timekeeping)** – Track employee working hours  

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

## 📂 Project Structure  

```
WEB-APISS/
│── config/            # Configurations (keys, passport, …)
│── controllers/       # Business logic for each module
│── models/            # MongoDB schemas
│── routes/            # API endpoints
│── utils/             # Utilities (Mailer, Generate Code, …)
│── app.js             # App entry point
│── package.json       # Dependencies info
```

---

## ⚙️ Installation & Run  

### 1. Clone repo  
```bash
git clone https://github.com/your-username/web-apiss.git
cd web-apiss
```

### 2. Install dependencies  
```bash
npm install
```

### 3. Create `.env` file  
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

### 4. Run server  
```bash
npm start
```

### 5. Test API with Postman  
Import the collection and call the endpoints at:  
```
http://localhost:5000/api/v1/
```

---

## 📌 Example API Endpoints  

- **Products**  
  - `POST /api/v1/menuitems` – Create product  
  - `GET /api/v1/menuitems` – Get product list  

- **Orders**  
  - `POST /api/v1/orders` – Create order  
  - `GET /api/v1/orders/:id` – Get order details  

- **Users**  
  - `POST /api/v1/users/register` – Register  
  - `POST /api/v1/users/login` – Login  

---

## 👨‍💻 Contribution  
Contributions are welcome! Please fork the repo, create a new branch, and submit a pull request.  

---

## 📄 License  
MIT License – you are free to use and modify for personal or commercial purposes.  
