import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private _waiter = new BehaviorSubject<any>('')
  public waiter$ = this._waiter.asObservable()
  private user: Observable<firebase.User>;

  constructor(private readonly fireAuth: AngularFireAuth) {
    this.user = this.fireAuth.authState;
  }

  signInWithEmail(email, pass): Promise<firebase.auth.UserCredential> {
    this._waiter.next(email);
    return this.fireAuth.signInWithEmailAndPassword(email, pass);
  }

  logOut() {
    this._waiter.next('');
    return this.fireAuth.signOut();
  }

  get currentUser(): Observable<firebase.User> {
    return this.user;
  }
}
