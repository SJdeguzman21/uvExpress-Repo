import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject , Subject} from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$:Observable <firebase.User>;
  userLogOn = new BehaviorSubject<boolean>(false);
  userLogOn$ = this.userLogOn.asObservable();
  admin = new BehaviorSubject<boolean>(false);
  newUser: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private database:AngularFireDatabase,
    private router: Router,
    private toastr: ToastrService,) { 
      this.user$ = afAuth.authState;
    }

    logout(){
      this.afAuth.auth.signOut();
      this.router.navigate(['./login']);
      this.userLogOn.next(false);
      this.admin.next(false)
    }

  loginWithGoogle(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['/home']);
    this.userLogOn.next(true);
  }

  // loginWithFB(){
  //   this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  //   this.router.navigate(['./home']);
  // }

  login( email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.toastr.error(error)
      })
      .then(userCredential => {
        if(userCredential) {
          this.router.navigate(['/home']);
          this.userLogOn.next(true);
        }
      })
  }

  createUser(user) {
    
    this.afAuth.auth.createUserWithEmailAndPassword( user.email, user.password)
      .then( userCredential => {
        this.newUser = user;
        userCredential.user.updateProfile( {
          displayName: user.firstName + ' ' + user.lastName
        });
        this.router.navigate(['/home']);
        this.toastr.success('Succesfully Registered');
        // this.insertUserData(userCredential)
        //   .then(() => {
        //     // this.router.navigate(['/home']);
        //   });    
        
      })
      .catch( error => {
        this.toastr.error(error)
      });
      // this.router.navigate(['/home']);
  }

  // insertUserData(userCredential: firebase.auth.UserCredential) {
  //   return this.db.doc(`Users/${userCredential.user.uid}`).set({
  //     email: this.newUser.email,
  //     firstname: this.newUser.firstName,
  //     lastname: this.newUser.lastName,
  //     role: 'network user'
  //   })
  // }

  save (user){
    this.database.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
      isAdmin: true,
    })
  }
 
}
