import { render, screen } from '@testing-library/react';
import Pagination from '../components/Pagination';

describe('Pagination Component', () => {
  it('updates URL query parameter when page changes', () => {
    const onPageChange = jest.fn();
    render(
      <Pagination
        currentPage={1}
        next={2}
        previous={null}
        onPageChange={onPageChange}
      />
    );
    screen.getByText('Next').click();
    expect(onPageChange).toHaveBeenCalledWith(2);
  });
});
