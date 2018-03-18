import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpParameterCodec, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  book = {};
  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);

  }
  getBook(id) {
    this.http.get('/book/'+id).subscribe(data => {
      this.book = data;
    });
  }

  updateBook(id, data) {
    this.http.put('/book/' + id, data)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
