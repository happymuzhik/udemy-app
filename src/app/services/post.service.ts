import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export class Post {
  constructor(public title: string, public id?: number){}
}

@Injectable()
export class PostService {

  URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.URL);
  }

  deletePost(id){
    return this.http.delete(this.URL + '/' + id);
  }

  patchPost(post){
    return this.http.patch(this.URL + '/' + post.id, post);
  }

}
