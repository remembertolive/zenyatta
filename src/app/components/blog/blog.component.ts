import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../services/post-service.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogPosts: Post[]  = [];

  constructor(private postService: PostServiceService) { }

  ngOnInit(): void {
    this.postService.getPostsJson().subscribe((posts: Post[]) => {
      this.blogPosts = posts;
    });
  }

  // Must load blog posts from a service in the future

}
