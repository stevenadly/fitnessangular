import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() togglesidenav = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onToggle() {
    this.togglesidenav.emit();
  }

}
