import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  book = {};

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit() {
  }

  createBook(){
    this.http.post('/book', this.book).subscribe(
      data => {
        let id = data['_id'];
        this.router.navigate(['/details', id]);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

}
