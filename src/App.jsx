import React from 'react'
import Navbar from './components/Navbar'
import { useAuth } from './context/AuthProvider'
import { Route, Routes } from 'react-router-dom';
import PlayingVideo from './components/PlayingVideo';
import Home from './components/Home';
import Search from './components/Search';

function App() {

  const { loading,data}=useAuth();
  console.log(loading);
  console.log(data);
  return (
   
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
      
    </div>
  )
}

export default App
