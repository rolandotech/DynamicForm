import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {UserForm} from './template'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserForm />} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
