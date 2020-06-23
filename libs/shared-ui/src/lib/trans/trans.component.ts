import { Component, OnInit } from '@angular/core';
import { TranscodeRequest } from '@class-validator-monorepo/api-interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'class-validator-monorepo-trans',
  templateUrl: './trans.component.html',
  styleUrls: ['./trans.component.scss']
})
export class TransComponent implements OnInit {

  headers = new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
  })
  hello$ = this.http.post<TranscodeRequest>('http://localhost:3333/api/',{filePath: 'test'});
  constructor(private http: HttpClient) {}

  ngOnInit() {
  }
}
