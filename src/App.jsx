import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

// Define the initial state
const initialState = {
  data: null,
  requestParams: {},
  loading: false
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload
      };
    case 'SET_REQUEST_PARAMS':
      return {
        ...state,
        requestParams: action.payload
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { data, requestParams, loading } = state;

  // Responsible for fetching data from an API based on requestParams state variable
  // and updating the data state with the received response.
  useEffect(() => {
    async function getData() {
      try {
        if (requestParams.method === 'GET') {
          let response = await axios.get(requestParams.url);
          dispatch({ type: 'SET_DATA', payload: response.data.results });
        }
        if (requestParams.method === 'POST') {
          let response = await axios.post(requestParams.url, data);
          dispatch({ type: 'SET_DATA', payload: response.data.results });
        }
        if (requestParams.method === 'PUT') {
          let response = await axios.put(requestParams.url, data);
          dispatch({ type: 'SET_DATA', payload: response.data.results });
        }
        if (requestParams.method === 'DELETE') {
          let response = await axios.delete(requestParams.url);
          dispatch({ type: 'SET_DATA', payload: response.data.results });
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (requestParams.method && requestParams.url) {
      getData();
    }
  }, [requestParams, data]);

  const callApi = (requestParams) => {
    setTimeout(() => {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_REQUEST_PARAMS', payload: requestParams });
      dispatch({ type: 'SET_LOADING', payload: false });
    }, 1000);
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