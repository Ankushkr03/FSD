## Experiment No. 8 - Develop RESTful APIs using Backend Framework (Flask)

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

### Deployment Base URL --> [Render Link](https://two3bis70062-experiment-8.onrender.com)

## STEPS & SCREENSHOTS

### 1. Server Running

![](Screenshots/0.png)
Flask development server successfully started.

### 2. CREATE Student (POST)

![Create Student 1](Screenshots/1.png)

### 3. READ ALL Students (GET)

![Read All Students](Screenshots/3.png)

### 4. READ ONE Student that doesn't exist in the DB

### GET Student ID = 2

![Read One - ID 2](Screenshots/4.png)

### 5. UPDATE Student (PUT)

![Update Student](Screenshots/5.png)

### 6. DELETE Student data

![Delete Student](Screenshots/6.png)

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
