import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/book.dto';
@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  async getBooks() {
    const books = await this.bookService.getBooks();
    return books;
  }

  @Get(':id')
  async getBook(@Param('id') id) {
    const book = await this.bookService.getBook(id);
    return book;
  }

  @Post()
  async addBook(@Body() createBookDto: CreateBookDTO) {
    const book = await this.bookService.addBook(createBookDto);
    return book;
  }

  @Delete(':id')
  async deleteBook(@Param('id') id) {
    const book = await this.bookService.deleteBook(id);
    return book;
  }
}
