import { Post, PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts()
      .subscribe( response => this.posts = response.json().map( r => new Post(r.title, r.id) ));
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.service.deletePost(post.id)
      .subscribe( response => this.posts.splice(index, 1));
  }

}
