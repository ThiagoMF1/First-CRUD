# First-CRUD
# Products API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB (Mongoose)** for managing products.

This project was created for learning purposes and demonstrates basic CRUD operations (Create, Read, Update, Delete) using Express and Mongoose.

---

## 🚀 Technologies Used

* Node.js
* Express
* MongoDB
* Mongoose
* dotenv

---

## 📦 Features

* Connects to MongoDB using environment variables
* Create new products
* List all products
* Update existing products
* Delete products

---

## 📁 Project Structure

```
├── src/
│   ├── AddProducts.js   # Mongoose model (Product schema)
│   └── index.js         # Main server file
├── .env                 # Environment variables
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root of the project and add:

```env
MONGO_URI=your_mongodb_connection_string
```

---

## ▶️ How to Run the Project

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm run dev
# or
node index.js
```

The server will run on:

```
http://localhost:3000
```

---

## 📡 API Routes

### Home

**GET /**

Returns a simple welcome message.

---

### Get all products

**GET /produtos**

Response example:

```json
[
  {
    "_id": "64f1c...",
    "name": "Product Name",
    "price": 100
  }
]
```

---

### Create a new product

**POST /produtos**

Request body example:

```json
{
  "name": "Product Name",
  "price": 100,
  "description": "Product description"
}
```

---

### Update a product

**PUT /promocoes/:id**

Request body example:

```json
{
  "price": 80
}
```

---

### Delete a product

**DELETE /Remove/:id**

Deletes a product by ID.

---

## 🧠 Learning Goals

* Understand Express routing
* Use async/await with MongoDB
* Work with environment variables
* Build a basic REST API

---

## 🛠️ Notes

* This project is for educational purposes
* Error handling can be improved
* Route naming can be standardized

---

## 📄 License

This project is open-source and free to use for learning.
