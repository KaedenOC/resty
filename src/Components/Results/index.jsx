import React from 'react';
import './Results.scss';

function Results(props) {
  let data = props.data;
  let isLoading = props.loading;
  return (

    <section>
      {isLoading ? (
        <div>LOADING...</div>
      ) : (
        <>
          <h2>RESULTS:</h2>
          <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
        </>
      )}
    </section>
  );
}

export default Results;
