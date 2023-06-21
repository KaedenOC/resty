import React, { useState } from 'react';

import './Form.scss';

// 'https://pokeapi.co/api/v2/pokemon'

function Form(props) {

  let apiCall = props.handleApiCall;
  const [method, setMethod] = useState('GET');
  const [url, setURL] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
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
            <span id="get">GET</span>
            <span id="post">POST</span>
            <span id="put">PUT</span>
            <span id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
}

export default Form;
