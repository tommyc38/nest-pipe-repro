import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITranscodeRequest, TranscodeRequest } from '@class-validator-monorepo/api-interfaces';

@Component({
  selector: 'class-validator-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.post<TranscodeRequest>('/api/',{filePath: 'test'});
  constructor(private http: HttpClient) {}
}
