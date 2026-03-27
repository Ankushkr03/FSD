# Experiment-11: Microservices Architecture with Flask

> A hands-on demonstration of **Microservices Architecture** using Python and Flask — featuring two independently deployable services that communicate over HTTP.

---

## 📌 Objective

To understand and implement the **Microservices Architecture** pattern by building two loosely coupled services:
- A **Customer Service** that manages customer data and aggregates order information.
- An **Order Service** that handles order records and status updates.

Both services communicate with each other via REST API calls over HTTP, simulating real-world inter-service communication.

---

## 🏗️ Project Structure

```
Experiment-11/
├── customer-service/
│   ├── customer_app.py       # Flask app for Customer Service (Port 5001)
│   └── requirements.txt      # Dependencies for Customer Service
│
├── order-service/
│   ├── order_app.py          # Flask app for Order Service (Port 5002)
│   └── requirements.txt      # Dependencies for Order Service
│
└── README.md
```

---

## ⚙️ Services Overview

### 1. Customer Service — Port `5001`

Manages customer profiles and fetches associated orders from the Order Service.

| Method | Endpoint                          | Description                                      |
|--------|-----------------------------------|--------------------------------------------------|
| GET    | `/`                               | Health check — returns service status            |
| GET    | `/customers/<user_id>/orders`     | Fetch customer info along with their order list  |

**Inter-service Communication:**  
When `/customers/<user_id>/orders` is called, Customer Service internally calls:
```
GET http://127.0.0.1:5002/orders/user/<user_id>
```
This aggregates customer data with the order data and returns a unified response.

---

### 2. Order Service — Port `5002`

Manages order records and supports status updates.

| Method | Endpoint                            | Description                            |
|--------|-------------------------------------|----------------------------------------|
| GET    | `/`                                 | Health check — returns service status  |
| GET    | `/orders/user/<user_id>`            | Get all orders belonging to a user     |
| PUT    | `/orders/<order_id>/status`         | Update the status of a specific order  |

---

## 🗄️ Sample Data

### Customers (Customer Service)

| ID  | Name         | Email                      |
|-----|--------------|----------------------------|
| 101 | Ankush_kr    | singnankush.j@gmail.com    |
| 102 | Aayush_Jena  | aayushjena5@gmail.com      |

### Orders (Order Service)

| Order ID | User ID | Items               | Amount | Status     |
|----------|---------|---------------------|--------|------------|
| 1        | 101     | Laptop, Mouse       | ₹2500  | Shipped    |
| 2        | 101     | Keyboard            | ₹1200  | Processing |
| 3        | 102     | Headphones          | ₹800   | Delivered  |

---

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- `pip` (Python package installer)

---

### Setup & Run — Order Service

```bash
# Navigate to order-service
cd order-service

# Create and activate virtual environment
python3 -m venv venv-order
source venv-order/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the service
python order_app.py
```

> Order Service will start at: `http://127.0.0.1:5002`

---

### Setup & Run — Customer Service

> ⚠️ **Start Order Service first** before starting Customer Service.

```bash
# Navigate to customer-service (in a new terminal)
cd customer-service

# Create and activate virtual environment
python3 -m venv venv-customer
source venv-customer/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the service
python customer_app.py
```

> Customer Service will start at: `http://127.0.0.1:5001`

---

## 🧪 API Testing

### Check Service Health

```bash
curl http://127.0.0.1:5001/
curl http://127.0.0.1:5002/
```

### Get Customer with Orders

```bash
curl http://127.0.0.1:5001/customers/101/orders
```

**Sample Response:**
```json
{
  "customer": {
    "id": 101,
    "name": "Ankush_kr",
    "email": "singnankush.j@gmail.com"
  },
  "orders": [
    {
      "id": 1,
      "user_id": 101,
      "order_date": "2026-02-20",
      "order_amount": 2500,
      "order_status": "Shipped",
      "items": [
        { "name": "Laptop", "quantity": 1, "price": 2000 },
        { "name": "Mouse", "quantity": 2, "price": 250 }
      ]
    }
  ]
}
```

### Get Orders by User

```bash
curl http://127.0.0.1:5002/orders/user/101
```

### Update Order Status

```bash
curl -X PUT http://127.0.0.1:5002/orders/1/status \
  -H "Content-Type: application/json" \
  -d '{"order_status": "Delivered"}'
```

---

## 📦 Dependencies

### Customer Service

| Package    | Version  |
|------------|----------|
| Flask      | 3.1.3    |
| requests   | 2.32.5   |
| Werkzeug   | 3.1.6    |

### Order Service

| Package    | Version  |
|------------|----------|
| Flask      | 3.1.3    |
| Werkzeug   | 3.1.6    |

---

## 🧠 Key Concepts Demonstrated

| Concept                        | Description                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| **Microservices Architecture** | Services are independently deployable and loosely coupled                  |
| **Inter-Service Communication**| Customer Service calls Order Service via HTTP REST API                     |
| **Fault Tolerance**            | Customer Service handles Order Service failures gracefully (returns `[]`)  |
| **RESTful API Design**         | Proper use of HTTP methods (GET, PUT) and status codes                     |
| **Separation of Concerns**     | Each service owns its own data and business logic                          |

---

## 📐 Architecture Diagram

```
┌──────────────────────────────────────┐
│           Client / Browser           │
└──────────────┬───────────────────────┘
               │ GET /customers/101/orders
               ▼
┌──────────────────────────────────────┐
│         Customer Service             │
│         (Port 5001)                  │
│                                      │
│  - Fetches customer from local store │
│  - Calls Order Service via HTTP      │
└──────────────┬───────────────────────┘
               │ GET /orders/user/101
               ▼
┌──────────────────────────────────────┐
│           Order Service              │
│           (Port 5002)                │
│                                      │
│  - Returns orders filtered by user   │
└──────────────────────────────────────┘
```

---

## 👤 Author

**Ankush Kumar**  
Full Stack Development — Backend Experiments Series
