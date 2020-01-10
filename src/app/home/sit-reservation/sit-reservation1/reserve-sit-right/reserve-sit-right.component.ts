import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ReservationService } from 'src/app/reservation.service';
import { ToastrService } from 'ngx-toastr';
import { ReservedSit } from '../../../../models/reservedSit';

@Component({
  selector: 'app-reserve-sit-right',
  templateUrl: './reserve-sit-right.component.html',
  styleUrls: ['./reserve-sit-right.component.css']
})
export class ReserveSitRightComponent implements OnInit {
selected:any;
newData:any;
selectedUV:any;
reservedList:any;
plate:any;
date:any;
time:any;
routeName:any;
quantity:any = {};
sitNumberValue: any;
full = false;

  constructor(private reservationService: ReservationService,
              private router:Router ,
              private toastr: ToastrService,
              private route:ActivatedRoute ){        
     }

  ngOnInit(){
    this.plate = this.route.snapshot.paramMap.get('key') 

    this.reservationService.routeID.subscribe(routeID => {
      this.selected = routeID
        }
    )
    this.reservationService.getAll(this.plate);
    this.reservationService.reservedSitChanged.subscribe(
      (reservationData: ReservedSit[]) =>{
        this.reservedList = reservationData
      }
    )

    this.reservationService.sitNumber.subscribe( sitNumber =>
      this.sitNumberValue = sitNumber
    )
    this.routeName = this.route.snapshot.paramMap.get('id');

    if(this.plate){
      this.reservationService.getQuantity(this.plate).subscribe( quantity =>{
        this.quantity = quantity;
        if(this.quantity){
          if ( this.quantity.quantity == this.selected.sit){
            this.full = true;
             }
        }
       }
      )
    }
   
  }

  reserve(data){
    this.dateAndTime();

    if (this.quantity == null ){
      this.sitNumberValue = 1;
    }else{
      this.sitNumberValue = this.quantity.quantity +1;
    }

    this.newData = {
      name: this.selectedUV.name,
      plate: this.selectedUV.plate,
      route:this.selectedUV.route,
      passengerName: data.passengerName,
      code: `${this.selectedUV.plate}-${this.sitNumberValue}-${data.passengerName}`,
      sitNumber: this.sitNumberValue,
      date : this.date,
      time : this.time,
    } 
    
      
    this.reservationService.reserve(this.newData, this.selectedUV.plate );
    this.toastr.success('Succesfully Reserved');
    this.reservationService.reservationData.next(this.newData);
    this.router.navigate(['/home/sit-reservation/sit-reservation1/sitCode']);

    if (this.quantity == null){
      this.reservationService.capacity(this.plate ,0);
    }else{
      this.reservationService.capacity(this.plate ,this.quantity.quantity);
    }
    
  }

  dateAndTime(){
    const today = new Date();
      this.date = today.toDateString();
      this.time = today.toLocaleTimeString();
  }

  bts(data){
    this.selectedUV = data;
  }

  viewCode(r){
    this.reservationService.reservationData.next(r);
    this.router.navigate(['/home/sit-reservation/sit-reservation1/sitCode']);
  }


 done(){
  if( !confirm('Are you sure that this reservation is done?')) return;
  this.reservationService.done(this.plate);
  this.router.navigate(['/home/sit-reservation/sit-reservation1/' , this.routeName]);
 }

}
