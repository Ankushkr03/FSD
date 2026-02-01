import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store/Store.jsx'
import App from './App.jsx'
import CounterProvider from './components/contextapi/CounterContextApi'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <CounterProvider>
        <App />
      </CounterProvider>
    </ReduxProvider>
  </StrictMode>
)