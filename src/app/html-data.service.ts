import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class HtmlDataService {

  constructor(private db: AngularFireDatabase) { }


              getAll(){
                return this.db.list('/html')
              }

              getCarousel(){
                return this.db.list('/carousel')
              }

              getNavbarImg(){
                return this.db.list('/navbar')
              }

              getVan(){
                return this.db.list('/navbar/van')
              }

              get(uid):any{
                return this.db.object('/users/' + uid);
               }
}
