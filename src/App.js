import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CustomerListPage from './pages/CustomerListPage';
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div>
      <p>Hej</p>

      <Switch>

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
