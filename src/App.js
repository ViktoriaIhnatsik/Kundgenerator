import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerListPage from './pages/CustomerListPage';
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div>
      

      <Switch>
        <Route path="/create-customer">
          <CustomerCreatePage />
        </Route>

        <Route path="/home">
          <CustomerListPage />
        </Route>


        <Route path="/">
          <LoginPage />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
