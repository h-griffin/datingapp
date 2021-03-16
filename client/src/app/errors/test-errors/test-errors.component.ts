import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baseUrl = 'https://localhost:5001/api/';
  validationErrors: string[] = []; // display text error on page

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error(){
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe(response => {
      console.log('[test-errors.component.ts] get404Error()', response);
    }, error => {
      console.log('[test-errors.component.ts] get404Error()', error);
    })
  }

  get400Error(){
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(response => {
      console.log('[test-errors.component.ts] get400Error()', response);
    }, error => {
      console.log('[test-errors.component.ts] get400Error()', error);
    })
  }

  get500Error(){
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe(response => {
      console.log('[test-errors.component.ts] get500Error()', response);
    }, error => {
      console.log('[test-errors.component.ts] get500Error()', error);
    })
  }

  get401Error(){
    this.http.get(this.baseUrl + 'buggy/auth').subscribe(response => {
      console.log('[test-errors.component.ts] get401Error()', response);
    }, error => {
      console.log('[test-errors.component.ts] get401Error()', error);
    })
  }

  get400ValidationError(){
    this.http.post(this.baseUrl + 'account/register', {}).subscribe(response => {
      console.log('[test-errors.component.ts] get400ValidationError()', response);
    }, error => {
      console.log('[test-errors.component.ts] get400ValidationError()', error);
      this.validationErrors = error;
    })
  }
}
