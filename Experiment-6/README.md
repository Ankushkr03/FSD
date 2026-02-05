# Experiment 6: Premium Registration Form

A professional, responsive, and dynamic registration form application built with **React** and **Material-UI**.

## 🚀 Overview

This project demonstrates a high-quality user interface for user registration. It features a robust theme system, comprehensive form validation, and a modern design aesthetic using glassmorphism and smooth transitions.

### Key Features

-   **🌓 Dynamic Theme System**: Seamlessly toggle between Light and Dark modes. The system uses Material-UI `ThemeProvider` and `CssBaseline` for consistent styling across all components.
-   **📝 Advanced Form Validation**:
    -   **Age Check**: Automatically calculates age from Date of Birth and ensures the user is at least 18 years old.
    -   **Phone Validation**: Enforces a strict 10-digit format.
    -   **Name Length**: Requires at least 3 characters.
    -   **Real-time Error Feedback**: Uses MUI `helperText` and `error` states to guide the user.
-   **💎 Premium UI/UX**:
    -   Centered, elevated registration card with glassmorphism blur effects.
    -   Dynamic gradient backgrounds that adapt to the active theme.
    -   Responsive grid layout for form fields.
    -   Role-based selection (Student, Professor, Independent).

## 🛠️ Technology Stack

-   **Frontend Framework**: React 19 (Vite)
-   **UI Library**: Material-UI (MUI)
-   **Styling Engine**: Emotion (@emotion/react, @emotion/styled)
-   **Icons**: Native Material Design icons

## 🔧 Installation and Setup

To run this experiment locally, follow these steps:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```

3.  **Access the App**:
    Open the local URL provided by Vite (e.g., `http://localhost:5173`).

## 🛠️ Important Fixes Implemented

During development, the following critical issues were resolved to ensure a smooth user experience:

1.  **Dependency Resolution**: Installed missing core libraries (`@mui/material`, `@emotion/react`, `@emotion/styled`) that were required for the component imports.
2.  **Theme Conflict Fix**: Resolved a "white-on-white" visibility issue for the Date of Birth field where native browser styles were conflicting with global CSS rules in light mode.
3.  **Layout Optimization**: Replaced basic HTML containers with MUI `Box`, `Paper`, and `Grid` for a superior, production-ready layout.

## 🎓 Learning Outcomes

Through this experiment, the following concepts were mastered:

1.  **Component-Based UI Design**: Learned how to build complex interfaces using reusable components and grids in Material-UI.
2.  **State Management & React Hooks**: Utilized `useState` for form data and visibility, and `useMemo` for efficient theme object creation.
3.  **Global Theme Management**: Implemented a professional Light/Dark mode system that transcends simple CSS toggling by using React context-based state.
4.  **Advanced Form Logic**: Developed custom logic for age calculation (Date objects) and regex-based validation for phone numbers.
5.  **Debugging Dependency Conflicts**: Identified and resolved issues related to missing npm packages and conflicting global CSS rules.
6.  **Responsive Layouts**: Created a mobile-friendly registration interface using Material-UI's fluid grid system.

---

*This project was created as part of the FSD (Full Stack Development) curriculum.*
