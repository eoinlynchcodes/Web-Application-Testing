import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders text to the screen from App', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Score Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
