import { Follower, GitHubService } from './../services/git-hub.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers: Follower[];

  constructor(private service: GitHubService) { }

  ngOnInit() {
    this.service.getFollowers()
      .subscribe( r =>
        this.followers = r.map( f => new Follower(f.login, f.avatar_url, f.html_url))
      );
  }

}
