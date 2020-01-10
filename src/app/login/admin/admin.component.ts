import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth.service';
import { moveIn, fallIn } from '../../router.animations';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class AdminComponent implements OnInit {
  loginForm: FormGroup;

  constructor( private router: Router,
               private toastr: ToastrService,
               private auth: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
        })
  }

  login(form){

    if(this.loginForm.value['username'] === null) {
      // window.alert('Kindly input Username.');
      this.toastr.error('Kindly input Username.')
      form.reset();
      return;
    }
    if(this.loginForm.value['password'] === null) {
      // window.alert('Kindly input Password.');
      this.toastr.error('Kindly input Password.')
      form.reset();
      return;
    }
    if(this.loginForm.value['username'] != 'Sharmaine' 
      || this.loginForm.value['password'] != '123456') {
      // window.alert('Invalid Username or Password.');
      this.toastr.error('Invalid Username or Password.')
      form.reset();
      return;
    }
   
    this.auth.admin.next(true);
    this.auth.userLogOn.next(true);
    this.router.navigate(['./home']);
    }

}
