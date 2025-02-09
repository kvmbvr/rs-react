import Person from '../types/Person';

type CardProps = {
  person: Person;
};

const Card = ({ person }: CardProps) => {
  return (
    <li className="result-item">
      <p className="title">{person.name}</p>
      <p className="year">{person.birth_year}</p>
    </li>
  );
};

export default Card;
