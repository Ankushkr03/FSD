# Testing Module: Full-Stack Integration

This directory contains the testing module for the FSD project, consisting of a Flask-based backend and a React-based frontend.

## 📁 Directory Structure

- **[Backend](./Backend)**: Flask RESTful API for student management.
- **[Frontend](./Frontend)**: React/Vite application with Material UI integration.

---

## 🛠️ Components

### 1. Backend (Flask)
The backend provides a complete CRUD (Create, Read, Update, Delete) API for managing student records.
- **Technologies**: Python, Flask, RESTful API.
- **Key Features**: Student data persistence, endpoint routing, and input validation.
- **Getting Started**: 
  ```bash
  cd Backend
  pip install -r requirements.txt
  python run.py
  ```

### 2. Frontend (React + Vite)
The frontend is a modern web application built with React and Vite, utilizing Material UI for a premium design.
- **Technologies**: React, Vite, Material UI (MUI).
- **Key Features**: Dynamic forms, student list visualization, and API integration.
- **Getting Started**:
  ```bash
  cd Frontend
  npm install
  npm run dev
  ```

---

## 🔗 Integration
The frontend is configured to communicate with the backend API to provide a seamless full-stack experience. Ensure the backend is running before starting the frontend development server.
