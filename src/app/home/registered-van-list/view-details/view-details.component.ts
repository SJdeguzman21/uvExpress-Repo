import { Component , OnInit} from '@angular/core';
import { RegistrationService } from 'src/app/registration.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
id : any;
data = {};
  constructor( private registrationService: RegistrationService,
               private route:ActivatedRoute,
               private router: Router) {     
               
  }
  
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.registrationService.getOne(this.id).valueChanges()
    .subscribe(data => this.data = data )
    }      
  }


  delete(){
    if( !confirm('Are you sure to delete this product?')) return;

    this.registrationService.delete(this.id);
    this.router.navigate(['/home/registered-van-list'])
  }

}
