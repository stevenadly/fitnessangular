import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy{
  @Output() togglesidenav = new EventEmitter();
  isAuth: boolean =false;
  Subscription :Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
   this.Subscription= this.authService.authChange.subscribe(result => {
      this.isAuth = result;
      debugger;

    });
  }
  ngOnDestroy(){
    this.Subscription.unsubscribe();
  }
  onToggle() {
    this.togglesidenav.emit();
  }

}
