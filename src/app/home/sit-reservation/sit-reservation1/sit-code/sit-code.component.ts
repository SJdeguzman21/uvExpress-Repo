import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ReservationService } from 'src/app/reservation.service';

@Component({
  selector: 'app-sit-code',
  templateUrl: './sit-code.component.html',
  styleUrls: ['./sit-code.component.css']
})
export class SitCodeComponent implements OnInit {

  dateTime: any;
  date:any;
  time:any;
  data: any;
  id:any;
  routeName:any;
  newId:any;
  key:any;

  
    constructor(private route: ActivatedRoute,
                private reservationService: ReservationService ,
                private router:Router ) {}
  
    ngOnInit() {

      this.reservationService.reservationData.subscribe(
        (reservationData) =>
          this.data = reservationData
      )
  
      this.reservationService.routeName.subscribe(routeName => {
        this.id = routeName;
        }
      )

      this.reservationService.key.subscribe(key => {
        this.key = key;
        }
      )

    } 
    
    back(){
      this.router.navigate(['/home/sit-reservation/sit-reservation1/', this.id, this.key ])
    }
  
    cancel(id){
      if( !confirm('Are you sure to delete this product?')) return;
      this.reservationService.delete(id);
      this.router.navigate(['/home/sit-reservation/sit-reservation1/', this.id, this.key ])
    }
  

}
