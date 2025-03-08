import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import Layout from './components/Layout.jsx'
import store from './store/store.js'
import './index.css'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store} >
      <div className='bg-black'>
      <Layout />
      </div>
    </Provider>
  </StrictMode>
)
