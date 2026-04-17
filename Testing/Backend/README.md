# Testing Backend - Flask API

### Project Structure

```bash
Experiment_8/
├── routes/
│   └── student_routes.py
├── exp8/
│   ├── Include/
│   ├── Lib/
│   └── Scripts/
├── requirements.txt
├── app.py
├── run.py
└── README.md
```

### Technologies Used

- Python
- Flask
- REST API
- Postman
- Render (Cloud Deployment)
- Virtual Environment (venv)

### Deployment Base URL --> [Render Link]([https://two3bis70048-experiment-16-backend.onrender.com])

## STEPS & SCREENSHOTS

### 1. Server Running

![](Screenshots/0.png)
Flask development server successfully started.

### 2. CREATE Student (POST)

<img width="1281" height="804" alt="Image" src="https://github.com/user-attachments/assets/ff21072b-1ba7-48a6-8637-fdf77a3b64a9" />

### 3. READ ALL Students (GET)

<img width="1281" height="804" alt="Image" src="https://github.com/user-attachments/assets/3f6ee721-2b8b-45b9-b75b-25522e15bc93" />

### 4. READ ONE Student that doesn't exist in the DB

### GET Student ID = 2

<img width="1281" height="804" alt="Image" src="https://github.com/user-attachments/assets/792b6998-86c5-409f-97fb-e1769bebe7ea" />

### 5. UPDATE Student (PUT)

<img width="1280" height="804" alt="Image" src="https://github.com/user-attachments/assets/6d99ec07-538f-43ba-843b-b65c16376fef" />

### 6. DELETE Student data

<img width="1280" height="804" alt="Image" src="https://github.com/user-attachments/assets/cb139d44-849c-495b-91d2-618757e23a32" />

## API Endpoints Summary

| Method | Endpoint       | Description        |
| ------ | -------------- | ------------------ |
| POST   | /students      | Create new student |
| GET    | /students      | Get all students   |
| GET    | /students/<id> | Get student by ID  |
| PUT    | /students/<id> | Update student     |
| DELETE | /students/<id> | Delete student     |

## Learning Outcome

- Gained foundational knowledge of backend development technologies.
- Developed the ability to create and manage Python virtual environments using venv.
- Acquired practical experience with the Flask framework in Python.
- Understood the principles and structure of RESTful APIs.
- Implemented routing mechanisms within Flask applications.
