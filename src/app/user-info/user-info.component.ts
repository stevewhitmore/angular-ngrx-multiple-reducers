import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState, selectUser, mTstamp } from '../store/reducers/user.reducer';
import { UserLogout, UserLogin } from '../store/actions/user.actions';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent implements OnInit {

  user$: Observable<any>;
  constructor(private store: Store<UserState>) {
    this.user$ = store.pipe(select(selectUser));
  }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(new UserLogin(
      { user: { uName: 'Rij', isAdmin: true, loggedIn: true, ts: mTstamp() } }
    ));
  }

  logout() {
     this.store.dispatch(new UserLogout());
  }

}