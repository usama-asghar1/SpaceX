import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title of the app', () => {
  render(<App />);
  const title = screen.getByText(/SpaceX Launch Data/i);
  expect(title).toBeInTheDocument();
});

test('renders LaunchData component', () => {
  render(<App />);
  const launchDataComponent = screen.getByTestId('launch-data');
  expect(launchDataComponent).toBeInTheDocument();
});