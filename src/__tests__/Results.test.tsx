import { render, screen, waitFor } from '@testing-library/react';
import Results from '../components/Results';

describe('Results Component', () => {
  it('renders the specified number of cards', async () => {
    render(<Results query="skywalker" />);
    await waitFor(() => {
      expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });
  });

  it('displays a message when no cards are present', async () => {
    render(<Results query="unknown" />);
    await waitFor(() => {
      expect(
        screen.getByText('No items that for this query')
      ).toBeInTheDocument();
    });
  });
});
