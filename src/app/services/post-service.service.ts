import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private postJson: any;

  constructor(private httpClient: HttpClient) { }

  getPostsJson(): Observable<any[]> {
    return this.httpClient.get<Post[]>('../../assets/posts/posts.json');
  }

}
