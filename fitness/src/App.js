import React from 'react';
import {Route, Switch,Link} from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Instructor from './components/Instructor'
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path ='/login'>
      <Login />
     </Route>
     <Route path='/sign-up'>
       <SignUp />
     </Route>
     <PrivateRoute component={Instructor} />
     </Switch>
    </div>
  );
}

export default App;
