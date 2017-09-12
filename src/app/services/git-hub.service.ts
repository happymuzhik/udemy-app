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
    let headers = new Headers();
    headers.append('X-RateLimit-Reset', (new Date(1372700873 * 1000)).getTime().toString());
    let options = new RequestOptions({ headers: headers });
    console.log(headers)
    return this.http.get(this.URL, options)
      .map( response => response.json() );
  }

}
