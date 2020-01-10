import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { RegisteredVan } from 'src/app/models/registeredVan';
import { Subject, BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import { RoutesVan } from './models/routes';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  registeredVan: RegisteredVan[]=[];
  registeredVanChanged = new Subject<RegisteredVan[]>();
  user = new BehaviorSubject(null);

  constructor(private db: AngularFireDatabase,
              private http : HttpClient) {}

  register(data){
    return this.db.list('/registeredVan').push(data);
  }
    
  update(id, data){
    return this.db.object('/registeredVan/' + id).update(data);
    }
  
  delete(id){
      return this.db.object('/registeredVan/' + id).remove();
    }

  getAll1(){
    return this.db.list('/registeredVan')
  }

  getOne(id){
    return this.db.object('/registeredVan/' + id)
  }

  getRoutes(){
    return this.db.list('/Routes');
  
  }
  
  getPassengerCapacity(){
    return this.db.list('/passengerCapacity');
  }

  getAll(){
    return this.http.get<RegisteredVan[]>('https://uvexpress-5b4d1.firebaseio.com/registeredVan.json')
        .pipe (
          map ( responseData =>{
            const postArray: RegisteredVan[] = [];
            for (const key in responseData){
            if (responseData.hasOwnProperty (key)){
              postArray.push({ ...responseData[key], id: key});
            }
            }return postArray;
          } 
          )
        )  
       .subscribe(posts =>{
          this.registeredVan = posts;
          this.registeredVanChanged.next(this.registeredVan.slice());
          
        })
  }

}