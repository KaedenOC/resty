import React, { useState } from 'react';

import './Form.scss';

// 'https://pokeapi.co/api/v2/pokemon'
//Form component receieves props and the handleApiCall function is extracted from the props
function Form(props) {

  let apiCall = props.handleApiCall;
  //two state variables are defined using useState
  const [method, setMethod] = useState('GET');
  const [url, setURL] = useState('');
  const [requestData, setRequestData] = useState('');

  //handles click events on the method options, takes selectedMethod as an argument, and updates the method state.
  const handleMethodClick = (selectedMethod) => {
    setMethod(selectedMethod);
  }

  //called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      requestData: requestData
    };
    apiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input
            name='url'
            type='text'
            value={url}
            onChange={(e) => setURL(e.target.value)}
          />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span
            id="get"
            className={method === 'GET' ? 'active' : ''}
            onClick={() => handleMethodClick('GET')}
          >GET</span>
          <span
            id="post"
            className={method === 'POST' ? 'active-post' : ''}
            onClick={() => handleMethodClick('POST')}
          >POST</span>
          <span
            id="put"
            className={method === 'PUT' ? 'active-put' : ''}
            onClick={() => handleMethodClick('PUT')}
          >PUT</span>
          <span
            id="delete"
            className={method === 'DELETE' ? 'active-delete' : ''}
            onClick={() => handleMethodClick('DELETE')}
          >DELETE</span>
        </label>
        {method === 'POST' || method === 'PUT' ? (
             <label>
             <span>Request Data (JSON): </span>
             <textarea
               name='requestData'
               value={requestData}
               onChange={(e) => setRequestData(e.target.value)}
             ></textarea>
           </label>
          ) : null}
      </form>
    </>
  );
}

export default Form;
