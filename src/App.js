
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Profile from './pages/Profile';

import Works from './pages/Works';








function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home navigation/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/works' element={<Works/>}/>
      <Route path='/profile' element={<Profile logout/>}/>
      

    </Routes>
    <Footer/>
    </>
  );
}

export default App;
