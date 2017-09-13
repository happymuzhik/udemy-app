import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

export class Follower {
  constructor(public login: string,
              public avatar_url: string,
              public html_url: string) {
  }
}

@Injectable()
export class GitHubService {

  URL = 'https://api.github.com/users/mosh-hamedani/followers';

  constructor(private http: Http) { }

  getFollowers() {
    const options = new RequestOptions({ headers: new Headers() });
    options.headers.set('If-None-Match', '6d19faa2a42cdd1623aac3ddadf0ba6c')
    return this.http.get(this.URL, options)
      .map( response => response.json() );
  }

}
