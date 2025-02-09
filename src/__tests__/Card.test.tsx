import { render, screen } from '@testing-library/react';
import Card from '../components/Card';
import Person from '../types/Person';

const mockPerson: Person = {
  name: 'Luke Skywalker',
  birth_year: '19BBY',
  url: 'https://swapi.dev/api/people/1/',
  height: '177',
  mass: '87',
  hair_color: 'black',
  skin_color: 'white',
  eye_color: 'blue',
  gender: 'male',
  homeworld: '',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: '',
  edited: '',
};

describe('Card Component', () => {
  it('renders the relevant card data', () => {
    render(<Card person={mockPerson} />);
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('19BBY')).toBeInTheDocument();
  });
});
