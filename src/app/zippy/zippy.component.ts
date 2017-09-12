import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  @Input() header: '';
  private isOpen: boolean;

  constructor() {
    this.isOpen = false;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
