import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App() {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    async function getData() {
      try {
        if (requestParams.method === 'GET') {
          // setLoading(true);
          let response = await axios.get(requestParams.url);
          setData(response.data.results);
          // setLoading(false);
          setData({
            count: response.data.count,
            pagination: response.data.pagination,
            results: response.data.results
          })
        }
        if (requestParams.method === 'POST') {
          let response = await axios.post(requestParams.url, data);
          setData(response.data.results);
        }
        if (requestParams.method === 'PUT') {
          let response = await axios.put(requestParams.url, data);
          setData(response.data.results);
        }
        if (requestParams.method === 'DELETE') {
          let response = await axios.delete(requestParams.url);
          setData(response.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (requestParams.method && requestParams.url) {
      getData();
    }

  }, [requestParams, data]);
  // 'https://pokeapi.co/api/v2/pokemon'
  const callApi = (requestParams) => {
    setTimeout(() => {
      setLoading(true);
      setRequestParams(requestParams);
      setLoading(false);

    }, 500);
  };

  return (
    <>
      <Header />
      <div className='headerMethod'>Request Method:</div>
      <div className='headerMethodOut'>{requestParams.method}</div>
      <div className='headerMethod'>URL:</div>
      <div className='headerURL'>{requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );
}

export default App;
