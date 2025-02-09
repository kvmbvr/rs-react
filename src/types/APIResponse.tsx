import Person from './Person';

type APIResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
  created: string;
  edited: string;
  url: string;
};

export default APIResponse;
