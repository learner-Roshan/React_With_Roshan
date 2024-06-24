import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myfun(){
  return (
    <>
      <h2>Roshan tries</h2>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Myfun/>
    <App />
  </React.StrictMode>,
)