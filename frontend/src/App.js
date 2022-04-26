import './App.css';
import React, { useEffect } from 'react'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import { useDispatch, useSelector} from "react-redux";
import {getUser, loadUser} from "./action/user"
import AdminPanel from './components/Admin/AdminPanel';
function App() {

  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector((state) => state.login );
  const { loading } = useSelector((state) => state.user );



  useEffect(()=>{
    dispatch(getUser());
    dispatch(loadUser());
  },[dispatch])
  return (
  <Router>
    {
      loading ?<div>Loading</div> :(
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/account" element={isAuthenticated ? <AdminPanel /> : <Login />} />
    </Routes>
    <Footer />
    </>
      
      )
    }
  </Router>
  );
}




export default App;
