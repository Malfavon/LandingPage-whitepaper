import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import WhitePaper from './WhitePaper';
import './App.css';
import NavBar from './navbar/NavBar';

function App() {

  return (
    <div className='App'>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/white-paper" element={
            <PrivateRoute>
              <WhitePaper />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
