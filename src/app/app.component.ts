import { Component, OnInit } from '@angular/core';
import { UserModel } from './shared/models/user.model';
import { TokenService } from './shared/services/token-service/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userInfo?: UserModel;
  constructor(private auth: TokenService){}
  ngOnInit(): void {
      this.auth.userProfile.subscribe((data) => {
        this.userInfo = data;
      });
  }

  title = 'urBudgetFront';
}
