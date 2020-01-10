import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/registration.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
passengerCapacity: any =[];
routes: any =[];
id: any;
data = {};

  constructor(private registrationService: RegistrationService,
              private router: Router,
              private route:ActivatedRoute) {}

  ngOnInit(){

    this.registrationService.getPassengerCapacity().valueChanges()
    .subscribe( passengerCapacity => 
      this.passengerCapacity = passengerCapacity
      )

    this.registrationService.getRoutes().valueChanges()
    .subscribe( routes =>
      this.routes = routes
    )

    this.id = this.route.snapshot.paramMap.get('id'); 
    if (this.id){
      this.registrationService.getOne(this.id).valueChanges()
      .subscribe(data => this.data = data )
    }

  }

  register(data){
    if(this.id) this.registrationService.update(this.id, data);
    else this.registrationService.register(data);

    this.router.navigate(['/home/registered-van-list'])
  }

  back(){
    if(this.id){
      this.router.navigate(['/home/registered-van-list/view-details/' , this.id])
    } else{
      this.router.navigate(['/home']);
    } 
  }

}
