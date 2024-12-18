import React from 'react'
import Home from './Pages/Home/Home'
import PostProduct from './Pages/PostProduct/PostProduct' 
import {Routes, Route, BrowserRouter, Router} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer theme='dark'/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/post' element={<PostProduct/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
