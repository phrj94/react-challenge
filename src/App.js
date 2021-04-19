import React from 'react';
import Country from './components/Country'
import gqlService from './services/gqlService'
import { useQuery } from '@apollo/client';

function App() {
  const { loading, error, data } = useQuery(gqlService.getCountries())
  if(loading) return <p>Wait for loading...</p>
  if(error) return <p>Something wrong to fetching data.</p>
  return (
    <div className="App">
      <Country country = { data.Country } />
    </div>
  );
}


export default App;
