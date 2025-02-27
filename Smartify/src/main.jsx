import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Load from './components/Load.jsx'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <Provider store={store}>
    <Load/>
    </Provider>
  </StrictMode>
)
