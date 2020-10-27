import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders fake mail link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/fake mail/i);
  expect(linkElement).toBeInTheDocument();
});
