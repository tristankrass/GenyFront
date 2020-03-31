import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Persons from './views/Persons';
import EdiPersons from './views/EdiPersons';

function App() {
  return (
    <Layout>
      <Route exact path='/' component={Persons} />
      <Route exact path='/persons' component={Persons} />
      <Route exact path='/persons/:id?' component={EdiPersons} />
      
    </Layout>
  );
}

export default App;
