import { render, screen } from '@testing-library/react';
import App from './App';

test('renders company name and banner heading', () => {
  render(<App />);
  expect(screen.getAllByText(/BIM-AXIS/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/FAST\. HIGH QUALITY\. PROFICIENT\./i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /holland project/i })).toBeInTheDocument();
});

test('renders training page from query', () => {
  window.history.pushState({}, '', '?page=training');
  render(<App />);
  expect(screen.getByRole('heading', { name: /autocad \/ bim/i })).toBeInTheDocument();
  expect(screen.getByText(/Racquel Sisgon Burdeos/i)).toBeInTheDocument();
  window.history.pushState({}, '', '/');
});
