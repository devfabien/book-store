import { Injectable } from '@nestjs/common';
import { BOOKS } from 'src/mocks/books.mock';

@Injectable()
export class BooksService {
  books = BOOKS;

  getBooks(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.books);
    });
  }
}
