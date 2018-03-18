import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private http:HttpClient) { }
    books: any;

  ngOnInit() {
      this.http.get('/book').subscribe(data => {
        this.books = data;
        //console.log(data);
      });
    }

}
