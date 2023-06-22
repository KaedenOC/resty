import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '.';

test('renders the footer text', () => {
  render(<Footer />);
  const footerElement = screen.getByText(/Kaeden O\. 2023/i);
  expect(footerElement).toBeInTheDocument();
});