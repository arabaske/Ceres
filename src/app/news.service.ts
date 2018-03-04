import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) { }

}
