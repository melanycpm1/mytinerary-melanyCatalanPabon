//import { useState } from 'react'
import React from 'react'
import Home from './components/Home'
import Cities from './components/Cities';
import Login from './components/Login';
import City from './components/City';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cities' element={<Cities/>}/>
          <Route path='/cities/:_id' element={<City/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

/* <Route path='/cities/:algo' element={<City/>}/>*/

export default App
