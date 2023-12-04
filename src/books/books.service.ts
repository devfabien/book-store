import { HttpException, Injectable } from '@nestjs/common';
import { BOOKS } from 'src/mocks/books.mock';

@Injectable()
export class BooksService {
  books = BOOKS;

  getBooks(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.books);
    });
  }

  getBook(bookId): Promise<any> {
    const id = Number(bookId);
    return new Promise((resolve) => {
      const book = this.books.find((book) => book.id === id);
      if (!book) {
        throw new HttpException('Book does not exist!', 404);
      }
      resolve(book);
    });
  }
}
