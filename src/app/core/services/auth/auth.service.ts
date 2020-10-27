import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;

  constructor(private readonly fireAuth: AngularFireAuth) {
    this.user = this.fireAuth.authState;
  }

  signInWithEmail(email, pass): Promise<firebase.auth.UserCredential> {
    return this.fireAuth.signInWithEmailAndPassword(email, pass);
  }

  logOut() {
    this.fireAuth.signOut();
  }

  get currentUser(): Observable<firebase.User> {
    return this.user;
  }
}
