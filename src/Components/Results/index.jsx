import React from 'react';
import './Results.scss';

function Results (props) {
  let data = props.data;
    return (
      <section>
        <h2>RESULTS:</h2>
        <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
      </section>
    );
}

export default Results;
