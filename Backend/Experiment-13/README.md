# Experiment-13: Flask MySQL CRUD API with Marshmallow Validation

A RESTful CRUD API built with **Flask**, **SQLAlchemy**, and **Marshmallow** that manages student records using a **MySQL/MariaDB** database.

---

## 📌 Objective

To demonstrate how to build a production-style REST API in Flask with:
- MySQL database integration via SQLAlchemy ORM
- Request validation using Marshmallow schemas
- Full CRUD operations (Create, Read, Update, Delete)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Python 3 | Programming Language |
| Flask | Web Framework |
| Flask-SQLAlchemy | ORM for MySQL |
| Marshmallow | Request Validation |
| PyMySQL | MySQL Driver |
| MariaDB / MySQL | Database |

---

## 📁 Project Structure

```
Experiment-13/
├── app.py              # Main Flask application
├── requirements.txt    # Python dependencies
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

---

## ⚙️ Prerequisites

- Python 3.x
- MariaDB / MySQL installed and running
- A MySQL user with access to the database

---

## 🚀 Setup & Run

### 1. Clone the Repository
```bash
git clone https://github.com/Ankushkr03/FSD.git
cd FSD/Backend/Experiment-13
```

### 2. Create & Activate Virtual Environment
```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Configure Database

Update the database URI in `app.py`:
```python
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://<user>:<password>@127.0.0.1/<database>'
```

Make sure the database exists:
```sql
CREATE DATABASE chandigarh_university_db;
```

Grant privileges to your user:
```sql
GRANT ALL PRIVILEGES ON chandigarh_university_db.* TO 'your_user'@'localhost';
FLUSH PRIVILEGES;
```

### 5. Run the Application
```bash
python app.py
```

The server will start at: **http://127.0.0.1:5000**

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check |
| `POST` | `/students` | Create a new student |
| `GET` | `/students` | Get all students |
| `GET` | `/students/<id>` | Get a student by ID |
| `PUT` | `/students/<id>` | Update a student by ID |
| `DELETE` | `/students/<id>` | Delete a student by ID |

---

## 📝 Sample Requests

### Create a Student
```bash
curl -X POST http://127.0.0.1:5000/students \
  -H "Content-Type: application/json" \
  -d '{"uid": "22BCS1001", "name": "Ankush Kumar", "age": 21}'
```

### Get All Students
```bash
curl http://127.0.0.1:5000/students
```

### Get Student by ID
```bash
curl http://127.0.0.1:5000/students/1
```

### Update a Student
```bash
curl -X PUT http://127.0.0.1:5000/students/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Ankush Kr", "age": 22}'
```

### Delete a Student
```bash
curl -X DELETE http://127.0.0.1:5000/students/1
```

---

## ✅ Validation Rules

| Field | Rules |
|-------|-------|
| `name` | Required, minimum 2 characters |
| `age` | Required, must be between 1 and 120 |
| `uid` | Required |

Invalid requests return a `400` response with detailed error messages.

---

## 👨‍💻 Author

**Ankush Kumar**  
Chandigarh University
