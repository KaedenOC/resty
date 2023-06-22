import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import {setupServer} from 'msw/node';
// import {rest} from 'msw';
import App from '../App';

test('renders data in the output area upon form submission', async () => {
  render(<App />);

  // Fill in the form fields
  fireEvent.change(screen.getByLabelText('URL:'), {
    target: { value: 'https://pokeapi.co/api/v2/pokemon' }
  });

  fireEvent.click(screen.getByText('GET'));

  // Submit the form
  fireEvent.click(screen.getByText('GO!'));

  // Wait for the data to be loaded
  await screen.findByText('RESULTS:');

  // Assert that the data is rendered in the output area
  expect(screen.getByText(/count: 2/i)).toBeInTheDocument();
  expect(screen.getByText(/fake thing 1/i)).toBeInTheDocument();
  expect(screen.getByText(/fake thing 2/i)).toBeInTheDocument();
});

// const server = setupServer(
//   rest.get('https://pokeapi.co/api/v2/pokemon'), (req, res, ctx) => {
//     return res(
//       ctx.json({
//         results: ['result1', 'result2', 'result3'],
//       })
//     )
//   }
// )