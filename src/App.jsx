import React, { useEffect } from 'react';
import Home from './components/Home';
import Cities from './components/Cities';
import Login from './components/Login';
import City from './components/City';
import SingUp from './components/SingUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider,useDispatch } from 'react-redux';
import store from './redux/store';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import authQueries from './services/authQueries';
import alertas from './ultis/alertas';
import { login } from './redux/actions/userAction';
function App() {

  const dispatch=useDispatch()
  useEffect( ()=>{
    authQueries.loginWithToken().then(res=>{
      if(res.status==200){
        dispatch(login(res.data))
        alertas.success("bienvenido"+" "+res.data.first_name)
      }
    })
  },[])

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cities' element={<Cities/>}/>
          <Route path='/cities/:_id' element={<City/>}/>
          <Route path='/SignUp' element={<SingUp/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App;
