import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Router } from '@angular/router';
import { BookService } from '../book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {


  allBooks: any[] = [];
  mysteryBooks!: any[];
  vacationBooks!: any[];
  makeMillionsBooks!: any[];
  getTheFacts!: any[];
  fallInLove!: any[];


  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks(){
    this.bookService.getBooksList().subscribe(data => {
      this.allBooks = data;
      this.mysteryBooks = this.allBooks.filter(book => book.carouselId === 1);
      this.vacationBooks = this.allBooks.filter(book => book.carouselId === 2);
      this.makeMillionsBooks = this.allBooks.filter(book => book.carouselId === 3);
      this.getTheFacts = this.allBooks.filter(book => book.carouselId === 4);
      this.fallInLove = this.allBooks.filter(book => book.carouselId === 5);
    });
  }

  // bookDetails(id: number){
  //   this.router.navigate(['employee-details', id]);
  // }

  updateBook(id: number){
    this.router.navigate(['update-book', id]);
  }

  // deleteBook(id: number){
  //   this.bookService.deleteBook(id).subscribe( data => {
  //     console.log(data);
  //     this.getBooks();
  //   })
  // }


}
