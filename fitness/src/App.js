import React from 'react';
import {Route, Switch,Link} from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import InstructorProfile from './components/InstructorProfile'
import PrivateRoute from './components/PrivateRoute'
import Client from './components/Client'
function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path ='/login'>
      <Login />
     </Route>
     <Route exact path='/sign-up'>
       <SignUp />
     </Route>
     <PrivateRoute exact path='/instructor-profile' component={InstructorProfile} />
     <PrivateRoute />
     </Switch>
    </div>
  );
}

export default App;
