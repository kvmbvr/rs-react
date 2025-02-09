import { render, screen, waitFor } from '@testing-library/react';
import PersonDetails from '../components/PersonDetails';

describe('PersonDetails Component', () => {
  it('displays a loading indicator while fetching data', async () => {
    render(<PersonDetails />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('displays the detailed card data', async () => {
    render(<PersonDetails />);
    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
      expect(screen.getByText('172cm')).toBeInTheDocument();
    });
  });
});
