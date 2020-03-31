import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './views/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Persons from './views/Persons';

function App() {
  return (
    <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    
    <Route path='/persons/:id?' component={Persons} />
</Layout>
  );
}

export default App;
