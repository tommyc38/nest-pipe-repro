import { Component, OnInit } from '@angular/core';
import { TranscodeRequest } from '@class-validator-monorepo/api-interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'class-validator-monorepo-trans',
  templateUrl: './trans.component.html',
  styleUrls: ['./trans.component.scss']
})
export class TransComponent implements OnInit {

  hello$ = this.http.post<TranscodeRequest>('http://localhost:3333/api/',{data:{filePath: 'tes'}}).toPromise().catch(err => err.error);
  constructor(private http: HttpClient) {}

  ngOnInit() {
  }
}
