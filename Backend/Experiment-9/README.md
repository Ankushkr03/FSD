# Experiment-9: Flask Authentication Methods

## Overview
This project is a Flask-based REST API that serves as an experiment (Experiment-9) to demonstrate and implement various methods of securing API endpoints. The application features three distinct authentication mechanisms:

1. **Basic Authentication**
2. **Simple Token Authentication** (Custom Base64 encoded tokens)
3. **JSON Web Token (JWT) Authentication**

## Tech Stack
* **Python 3**
* **Flask** - Web framework for building the API
* **Flask-JWT-Extended** - For managing JSON Web Tokens
* **Gunicorn** - WSGI HTTP Server for UNIX (for production deployment)

## Project Structure
```text
Experiment-9/
├── app.py             # Main application file containing routes and logic
├── requirements.txt   # Python project dependencies
└── exp-9/             # Virtual environment / additional files directory
```

## Setup & Running Locally

1. **Navigate to the project directory:**
   ```bash
   cd /path/to/Experiment-9
   ```

2. **Create and activate a virtual environment (optional but recommended):**
   ```bash
   python3 -m venv exp-9
   source exp-9/bin/activate
   ```

3. **Install the dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask application:**
   ```bash
   python app.py
   ```
   The application will run on `http://0.0.0.0:5000` with debug mode enabled.

## Default Users (In-Memory Data)
For demonstration purposes, the application uses an in-memory dictionary of users:
* **Username**: `admin` | **Password**: `admin123` | **Role**: `admin`
* **Username**: `ankush`  | **Password**: `ankushkr9878`  | **Role**: `user`

---

## API Endpoints

### 1. Root Route
* **Endpoint:** `/`
* **Method:** `GET`
* **Description:** Returns the application status and a list of available routes.

### 2. Basic Authentication
* **Endpoint:** `/basic-protected`
* **Method:** `GET`
* **Headers Required:** `Authorization: Basic <base64(username:password)>`
* **Description:** Protects the route using standard Basic Auth. Returns a welcome message upon success.

### 3. Simple Token Authentication
* **Endpoint:** `/token-login`
  * **Method:** `POST`
  * **Body (JSON):** `{"username": "<user>", "password": "<pass>"}`
  * **Description:** Verifies credentials and returns a simple Base64-encoded token for the user.

* **Endpoint:** `/token-protected`
  * **Method:** `GET`
  * **Headers Required:** `x-auth-token: <your_token>`
  * **Description:** A protected route that requires the custom token passed via the `x-auth-token` header.

### 4. JWT Authentication
* **Endpoint:** `/jwt-login`
  * **Method:** `POST`
  * **Body (JSON):** `{"username": "<user>", "password": "<pass>"}`
  * **Description:** Verifies credentials using `flask-jwt-extended` and returns a secure JWT `access_token`.

* **Endpoint:** `/jwt-protected`
  * **Method:** `GET`
  * **Headers Required:** `Authorization: Bearer <your_jwt_token>`
  * **Description:** A highly secure route protected by the JWT. Checks the token's validity and returns the user identity.

## Dependencies highlights
See `requirements.txt` for exact versions, including:
* `Flask==3.1.2`
* `Flask-JWT-Extended==4.7.1`
* `PyJWT==2.11.0`
* `gunicorn==23.0.0`
