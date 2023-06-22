import React from 'react';
import './Results.scss';
import JSONPretty from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/themes/monikai.css';

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
          <pre data-testid="results-test">{data ? <JSONPretty id="json-pretty" theme={JSONPrettyMon} data={data}/> : null}</pre>
        </>
      )}
    </section>
  );
}

export default Results;
