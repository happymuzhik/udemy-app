import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface LikeChangeInterface {
  likesCount: number;
  isActive: boolean;
}

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input() likesCount: number;
  @Input() isActive: boolean;

  @Output() change = new EventEmitter();

  constructor() { }

  onChange(){
    this.likesCount += (this.isActive) ? -1 : +1;
    this.isActive = !this.isActive;
    this.change.emit({
      likesCount: this.likesCount,
      isActive: this.isActive
    });
  }

}
