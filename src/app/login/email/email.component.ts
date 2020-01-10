import { Component} from '@angular/core';
import { moveIn, fallIn } from '../../router.animations';
import { AuthService } from 'src/app/auth.service';
import {  NgForm } from '@angular/forms';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent  {
  form: NgForm;

  constructor(private auth: AuthService) { }

  login(form ) {
    this.auth.login(form.value.email, form.value.password);
    form.reset();
  }

}