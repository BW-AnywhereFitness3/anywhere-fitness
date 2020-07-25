import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Instructor from './components/Instructor'
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <div className="App">
    
      <Login />
     <PrivateRoute component={Instructor} />
    
    </div>
  );
}

export default App;
