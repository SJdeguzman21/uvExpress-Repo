import { Component, OnInit } from '@angular/core';
import { RegisteredVan } from 'src/app/models/registeredVan';
import { RegistrationService } from 'src/app/registration.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registered-van-list',
  templateUrl: './registered-van-list.component.html',
  styleUrls: ['./registered-van-list.component.css']
})
export class RegisteredVanListComponent implements OnInit {
registeredVan:RegisteredVan[];
subscription: Subscription;
filteredVan: any;

  constructor(private registrationService: RegistrationService) {}
        
  ngOnInit() {
    this.registrationService.getAll();

    this.registrationService.registeredVanChanged
    .subscribe(
      (registeredVan : RegisteredVan[]) =>{
        this.registeredVan = this.filteredVan = registeredVan;
         }
       )  
  }
  
  filter(query: string){
    this.filteredVan= (query) ? 
    this.registeredVan.filter(p => p.name.toLowerCase().includes(query.toLocaleLowerCase())) :
    this.registeredVan; 
  }
}
