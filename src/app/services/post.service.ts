import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

export class Post {
  constructor(public title: string, public id?: number){}
}

export class AppError {
  text: string;
  constructor(public error?: Response) {
    switch(error.status){
      case 400:
        this.text = 'Error status is 400!';
        break;
      case 404:
        this.text = 'No post with this ID!';
        break;
      default:
        this.text = 'Unknown error!';
        break;
    }
  }
}

@Injectable()
export class PostService {

  URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.URL)
      .catch((error: Response) => {
        return Observable.throw(new AppError(error));
      });
  }

  deletePost(id){
    return this.http.delete(this.URL + '/' + id)
      .catch((error: Response) => {
        return Observable.throw(new AppError(error));
      });
  }

  patchPost(post){
    return this.http.patch(this.URL + '/' + post.id, post)
      .catch((error: Response) => {
        return Observable.throw(new AppError(error));
      });
  }

}
