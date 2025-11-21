import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from '../interfaces/post';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private postsCache: Post[] | null = null;

  constructor(private httpClient: HttpClient) { }

  getPostsJson(): Observable<Post[]> {
    if (this.postsCache) {
      return of(this.postsCache);
    } else {
      return this.httpClient.get<Post[]>('http://localhost:8000').pipe(
        tap(posts => this.postsCache = posts)
      );
    }
  }

  getPostById(id: string | number): Observable<Post | undefined> {
    return new Observable<Post | undefined>(observer => {
      this.getPostsJson().subscribe(posts => {
        observer.next(posts.find(post => post.id == id));
        observer.complete();
      });
    });
  }
}