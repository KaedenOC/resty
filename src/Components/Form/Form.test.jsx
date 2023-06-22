import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '.';

test('submits form data on button click', () => {
  const mockHandleApiCall = jest.fn();
  render(<Form handleApiCall={mockHandleApiCall} />);

  // Fill in the form fields
  fireEvent.change(screen.getByLabelText('URL:'), {
    target: { value: 'https://pokeapi.co/api/v2/pokemon' }
  });

  fireEvent.click(screen.getByText('GET'));

  // Submit the form
  fireEvent.click(screen.getByText('GO!'));

  // Verify that the form data was submitted correctly
  expect(mockHandleApiCall).toHaveBeenCalledWith({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon',
    requestData: ''
  });
});