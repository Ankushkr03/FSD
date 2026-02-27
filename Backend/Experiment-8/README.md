# Experiment 8 — Flask REST API with Blueprints

A beginner-friendly Flask backend application that demonstrates how to build a **RESTful API** using **Flask Blueprints** for modular route organization. The API performs full **CRUD (Create, Read, Update, Delete)** operations on student data stored in-memory.

---

## 📁 Project Structure

```
Experiment-8/
├── app.py                  # App factory — creates and configures the Flask app
├── run.py                  # Entry point — runs the development server
├── requirements.txt        # Python dependencies
├── routes/
│   ├── __init__.py         # Makes routes a Python package
│   └── student_routes.py  # All student-related API routes (Blueprint)
└── README.md
```

---

## 🧪 Objective

- Understand the **Flask Blueprint** pattern for modular route organization
- Build a **RESTful API** with proper HTTP methods (GET, POST, PUT, DELETE)
- Practice returning structured **JSON responses** with appropriate HTTP status codes
- Use an **in-memory list** as a simple data store

---

## ⚙️ Setup & Installation

### 1. Create and activate a virtual environment
```bash
python -m venv exp-8
source exp-8/bin/activate        # On Linux/macOS
exp-8\Scripts\activate           # On Windows
```

### 2. Install dependencies
```bash
pip install -r requirements.txt
```

### 3. Run the server
```bash
python run.py
```

The server will start at:
- **Local:** `http://127.0.0.1:5000`
- **Network:** `http://<your-ip>:5000`

---

## 🛣️ API Endpoints

Base URL: `http://127.0.0.1:5000`

| Method   | Endpoint              | Description              |
|----------|-----------------------|--------------------------|
| `GET`    | `/`                   | Health check             |
| `GET`    | `/students`           | Get all students         |
| `GET`    | `/students/<id>`      | Get a student by ID      |
| `POST`   | `/students`           | Create a new student     |
| `PUT`    | `/students/<id>`      | Update a student by ID   |
| `DELETE` | `/students/<id>`      | Delete a student by ID   |

---

## 📬 Request & Response Examples

### ✅ Health Check
```
GET /
```
**Response:**
```json
{
  "message": "Backend Server is running"
}
```

---

### 📋 Get All Students
```
GET /students
```
**Response:**
```json
[
  { "id": 1, "name": "Ankush", "age": 21 },
  { "id": 2, "name": "Rahul", "age": 22 }
]
```

---

### 🔍 Get Student by ID
```
GET /students/1
```
**Response (200):**
```json
{ "id": 1, "name": "Ankush", "age": 21 }
```
**Response (404 — not found):**
```json
{ "error": "Student not found" }
```

---

### ➕ Create a Student
```
POST /students
Content-Type: application/json
```
**Request Body:**
```json
{
  "name": "Ankush",
  "age": 21
}
```
**Response (201):**
```json
{ "id": 1, "name": "Ankush", "age": 21 }
```
> `age` is optional. `name` is **required**.

---

### ✏️ Update a Student
```
PUT /students/1
Content-Type: application/json
```
**Request Body:**
```json
{
  "name": "Ankush Kumar",
  "age": 22
}
```
**Response (200):**
```json
{ "id": 1, "name": "Ankush Kumar", "age": 22 }
```

---

### 🗑️ Delete a Student
```
DELETE /students/1
```
**Response (200):**
```json
{ "message": "Deleted successfully" }
```

---

## 🔑 Key Concepts Learned

### Flask Blueprints
A **Blueprint** is Flask's way of organizing routes into separate modules. Instead of defining all routes in `app.py`, we group related routes (e.g., all student routes) into their own file and register the Blueprint on the main app.

```python
# Define a blueprint
student_bp = Blueprint("students", __name__)

# Register it in app.py
app.register_blueprint(student_bp)
```

### App Factory Pattern
The `create_app()` function in `app.py` is the **App Factory** pattern — it creates and returns the Flask app. This makes it easy to configure the app differently for testing vs. production.

### HTTP Status Codes Used
| Code | Meaning |
|------|---------|
| `200` | OK — Request succeeded |
| `201` | Created — New resource created |
| `400` | Bad Request — Missing required fields |
| `404` | Not Found — Resource doesn't exist |

---

## 🛠️ Tech Stack

| Tool | Version |
|------|---------|
| Python | 3.x |
| Flask | 3.1.2 |
| Werkzeug | 3.1.5 |

---

## 📝 Notes

- Data is stored **in-memory** (plain Python list). It resets every time the server restarts. No database is used in this experiment.
- The server runs in **debug mode** for development — never use debug mode in production.
- Use **Postman** or **curl** to test the API endpoints.
