import { Component} from '@angular/core';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-sit-reservation',
  templateUrl: './sit-reservation.component.html',
  styleUrls: ['./sit-reservation.component.css']
})
export class SitReservationComponent  {
routes : any;

  constructor(private registrationService: RegistrationService) {
    this.registrationService.getRoutes().valueChanges()
    .subscribe(routes => this.routes = routes)
   }

}
