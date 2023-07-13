import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userData: any;
  constructor(public afAuth: AngularFireAuth, public authService: AuthService) { }
  ngOnInit(): void {
    this.afAuth.authState.subscribe((user) => {
      if (this.authService.getStorageData('user')) {
        this.userData = this.authService.getStorageData('user')
      }
      else if (user) {
        this.userData = user;
      }
    })
  }
}
