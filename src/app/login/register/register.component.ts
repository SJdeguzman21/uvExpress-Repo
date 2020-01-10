import { Component} from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { moveIn, fallIn } from '../../router.animations';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class RegisterComponent{
 form: NgForm;

  constructor(private auth: AuthService){}

  createUser(form) {
    this.auth.createUser(form.value);
    form.reset();
    
  }
 
}
