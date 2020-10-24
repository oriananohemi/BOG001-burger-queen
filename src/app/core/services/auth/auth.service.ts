import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(private readonly fireAuth: AngularFireAuth) { }

  login() {
    this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.fireAuth.signOut();
  }
}
