# Experiment 4: State Management in React

This experiment demonstrates three different ways to manage state in a React application: **Local State**, **Context API**, and **Redux**. The project illustrates how data flows and how components interact with different state management architectures.

## 🚀 Learning Outcomes & Key Takeaways

### 1. Local State Management (`useState`)
*   **Encapsulation**: Learned that local state is private to the component it is defined in. Changes to one `LocalCounter` do not affect another instance of the same component.
*   **Simplicity**: Best for UI-only state (like form inputs or toggle switches) that doesn't need to be shared globally.
*   **Limitation**: Difficult to manage when data needs to be shared between deeply nested components (avoiding "Prop Drilling").

### 2. Global State with Context API
*   **Provider Pattern**: Learned how to wrap the application in a `Provider` to make state accessible to any child component without passing props manually.
*   **Centralization**: Used a central `CounterProvider` to hold the logic and state, which is then consumed by `useContext`.
*   **Use Case**: Ideal for medium-sized applications or for state that doesn't change extremely frequently (e.g., Theme, User Auth).

### 3. Global State with Redux
*   **Predictable State**: Learned the core concepts of Redux: **Store**, **Reducers**, and **Actions**. 
*   **Unidirectional Data Flow**: State is "read-only" and can only be modified by dispatching actions to a reducer.
*   **Hooks Integration**: Used `useSelector` to read data from the store and `useDispatch` to trigger state changes.
*   **Scalability**: Redux provides a structured way to handle complex state transitions across large-scale applications.

### 4. Project Configuration & Build Process
*   **Dependency Management**: Realized the importance of properly installing and declaring dependencies (like `redux` and `react-redux`) in `package.json` to avoid build failures.
*   **Vite Build Pipeline**: Understood how Vite resolves imports during the build process and why missing `node_modules` or incorrect paths in `main.jsx` can break the production build.

---

## 🛠️ Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```
