import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../components/Search';

describe('Search Component', () => {
  it('saves the entered value to local storage', async () => {
    const setLocalStorageValue = jest.fn();
    render(
      <Search
        setLocalStorageValue={setLocalStorageValue}
        localStorageValue=""
      />
    );
    const input = screen.getByPlaceholderText('Type something');
    await userEvent.type(input, 'Luke');
    screen.getByText('Search').click();
    expect(setLocalStorageValue).toHaveBeenCalledWith('Luke');
  });
});
