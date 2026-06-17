import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Nexus Meeting on landing page', () => {
  render(<App />);
  const titleElement = screen.getByText(/Nexus Meeting/i);
  expect(titleElement).toBeInTheDocument();
});