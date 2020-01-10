import { Component } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { ReservationService } from 'src/app/reservation.service';

@Component({
  selector: 'app-sit-reservation1',
  templateUrl: './sit-reservation1.component.html',
  styleUrls: ['./sit-reservation1.component.css']
})
export class SitReservation1Component  {
routeName: string;
registeredVan: any;
selected: any;
selectedUV: any;
newData: any;
url:any;
s:any;
  constructor( private route:ActivatedRoute,
               private registrationService: RegistrationService,
               private reservationService: ReservationService,
               private router: Router
              ) { 
    this.routeName = this.route.snapshot.paramMap.get('id');
    this.registrationService.getAll1().valueChanges().subscribe(data => this.registeredVan = data );
     
  }

  select(van, plate){
    this.selected = van;
    if (this.selected){
      this.router.navigate([plate], {relativeTo: this.route});
    }
    this.reservationService.routeID.next(van);
    this.reservationService.routeName.next(this.routeName);
    this.reservationService.key.next(plate);
  }

}