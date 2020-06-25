import { Component, ElementRef, Input, OnInit } from '@angular/core';
import {
  ITranscodeDetail,
  MediaType,
  Status,
  TranscodeRequest
} from '@class-validator-monorepo/api-interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'class-validator-monorepo-trans',
  templateUrl: './trans.component.html',
  styleUrls: ['./trans.component.scss']
})
export class TransComponent implements OnInit {

  hello$ = this.http.post<TranscodeRequest>('http://localhost:3333/api/', { data: { filePath: 'tesy' } }).toPromise().catch(err => err.error);

  _status: Status = 'waiting';

  @Input() status(status: Status) {
    this._status = status;
  };

  @Input() detail: ITranscodeDetail = {type: 'video', outputFormat: 'mp4'};

  _type: MediaType;
  @Input() set type(mediaType: MediaType) {
    this._type = mediaType;
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }
}
