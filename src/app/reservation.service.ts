import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { BehaviorSubject, Subject } from 'rxjs';
import { ReservedSit } from './models/reservedSit';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
reservationData = new BehaviorSubject(null);
routeID = new BehaviorSubject(null);
routeName = new BehaviorSubject(null);
key = new BehaviorSubject(null);
reservedSit : ReservedSit[];
reservedSitChanged = new Subject<ReservedSit[]>();

sitNumber =new BehaviorSubject(0);

constructor(private db: AngularFireDatabase,
            private http : HttpClient ) {}

  reserve(data, plate){
    return this.db.list('/reserveSit/'+ plate).push(data);
  }

  delete(key){
    return this.db.object('/reserveSit/' + key).remove();
  }

  getAll(plate){
    return this.http.get<ReservedSit[]>('https://uvexpress-5b4d1.firebaseio.com/reserveSit/' + plate + '.json')
        .pipe (
          map ( responseData =>{
            const postArray: ReservedSit[] = [];
            for (const key in responseData){
            if (responseData.hasOwnProperty (key)){
              postArray.push({ ...responseData[key], id: key});
            }
            }return postArray;
          } 
          )
        )  
       .subscribe(posts =>{
          this.reservedSit = posts;
          this.reservedSitChanged.next(this.reservedSit.slice());
          
        })
  }

  done(plate){
    return this.db.object('/reserveSit/' + plate).remove();
  }

  getQuantity(plate){
    return this.http.get<ReservedSit[]>('https://uvexpress-5b4d1.firebaseio.com/reserveSit/' + plate + '/quantity.json')
    
  }

  capacity(plate, quantity){
    this.db.object('/reserveSit/' + plate + '/quantity' ).update({
     quantity: quantity +1
    })
  }

}
