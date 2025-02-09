import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Person from '../types/Person';
import Spinner from './Spinner';

const PersonDetails = () => {
  const { personUrl } = useParams();
  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPerson = async () => {
      if (!personUrl) return;

      try {
        setLoading(true);
        const response = await fetch(decodeURIComponent(personUrl));
        if (!response.ok) {
          setError(true);
          return;
        }
        const data = await response.json();
        setPerson(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPerson();
  }, [personUrl]);

  if (loading) return <Spinner />;
  if (error) return <p>Error loading person details</p>;
  if (!person) return null;

  return (
    <div className="person-details">
      <Link to="/">Close</Link>
      <h2>{person.name}</h2>
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Height:</span> {person.height}cm
        </p>
        <p>
          <span className="font-semibold">Mass:</span> {person.mass}kg
        </p>
        <p>
          <span className="font-semibold">Birth Year:</span> {person.birth_year}
        </p>
        <p>
          <span className="font-semibold">Eye Color:</span> {person.eye_color}
        </p>
        <p>
          <span className="font-semibold">Gender:</span> {person.gender}
        </p>
      </div>
    </div>
  );
};

export default PersonDetails;
