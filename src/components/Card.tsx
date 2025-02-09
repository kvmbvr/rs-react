import Book from '../types/Book';

type CardProps = {
  book: Book;
};

const Card = ({ book }: CardProps) => {
  return (
    <li className="book">
      <p className="title">{book.title}</p>
      <p className="year">{book.publishedYear}</p>
    </li>
  );
};

export default Card;
