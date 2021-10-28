import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders all App components', () => {
    render(<App />);
    screen.getByText('Welcome to our page!', { exact: true });
  });

  it('Switch to calculator page', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Calculator'), { exact: true });
    screen.getByText('Let\'s do some math!');
  });

  it('Switch to Quotes page', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Quotes'), { exact: true });
    screen.getByText('today\'s quote....');

    const quote = 'When the seas of life get rough, remember your Lifeguard walks on water. - Unknown';
    screen.getByText(quote);
  });
});
