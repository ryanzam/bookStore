import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private http: HttpClient, private route:ActivatedRoute, private router:Router) { }
  
  book={};

  ngOnInit() {
    this.getDetails(this.route.snapshot.params['id']);
  }

  getDetails(id){
    this.http.get('/book/' + id).subscribe(
      data => {
        this.book = data;
      }
    )
  }

  deleteBook(id){
    this.http.delete('/book/'+ id).subscribe(
      res=>{
        this.router.navigate(['/books']);
      }),
      (err)=>{
        console.log(err);
      }
  }

}
