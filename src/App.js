import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Footer } from './components/StyleComponents';
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerListPage from './pages/CustomerListPage';
import CustomerUpdatePage from './pages/CustomerUpdatePage';
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div className="vh-100 bg-light">

      <nav className="navbar navbar-dark bg-dark bg-gradient">
       <div className="container-fluid">
        <a className="navbar-brand" href="/">Customer Generator</a>
       </div>
      </nav>
      
      <Switch>
        <Route path="/create-customer">
          <CustomerCreatePage />
        </Route>

        <Route path="/customers/:id/edit" component={CustomerUpdatePage} />

        <Route path="/customers/:id" component={CustomerDetailPage} />
         

        <Route path="/home">
          <CustomerListPage />
        </Route>


        <Route path="/">
          <LoginPage />
        </Route>

      </Switch>

      <Footer>
      <span className="text-muted">&copy; Copyright 2021</span>
     </Footer>

    </div>
  );
}

export default App;
