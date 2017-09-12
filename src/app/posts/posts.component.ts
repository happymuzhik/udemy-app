import { Post, PostService, AppError } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  error = false;
  errorText = '';

  constructor(private service: PostService) { }

  ngOnInit() {
    this.error = false;
    this.service.getPosts()
      .subscribe( response => this.posts = response.json().map( r => new Post(r.title, r.id) ),
                  (error: AppError) => this.errorHander(error));
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.error = false;
    this.service.deletePost(post.id)
      .subscribe( response => this.posts.splice(index, 1),
                  (error: AppError) => this.errorHander(error));
  }

  errorHander(error: AppError) {
    this.error = true;
    this.errorText = error.text;
  }

}
