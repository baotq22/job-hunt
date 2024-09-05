import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import App from './App.jsx'
import Details from './Details.jsx'

function Main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index path='/' element={<App />}></Route>
            <Route path='/details/:jobId' element={<Details />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);