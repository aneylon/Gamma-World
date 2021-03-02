import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiscussionItem } from '../models/discussionItem';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  private url = 'api/discussionItems'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }
  constructor(
    private http: HttpClient
  ) { }

  getDiscussionItems(): Observable<DiscussionItem[]> {
    return this.http.get<DiscussionItem[]>(this.url)
  }
}
