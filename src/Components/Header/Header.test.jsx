import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '.';

test('renders the header with the correct text', () => {
  render(<Header />);
  const headerElement = screen.getByRole('heading', { level: 1 });
  expect(headerElement).toBeTruthy();
  expect(headerElement).toBeInTheDocument('RESTy');
});