import Book from './Book';

type PageInfo = {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
};

type SortInfo = {
  clauses?: number[];
};

type ApiResponse = {
  page: PageInfo;
  sort: SortInfo;
  books: Book[];
};

export default ApiResponse;
