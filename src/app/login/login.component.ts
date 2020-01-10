import { Component, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { AuthService } from '../auth.service';
import { HtmlDataService } from '../html-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  data:any;
  constructor(private auth: AuthService,
              private htmlService: HtmlDataService,){ }
ngOnInit(){
  this.htmlService.getVan().valueChanges().subscribe(data =>{
    this.data = data;
      } )
}
  loginWithG(){
    this.auth.loginWithGoogle();

  }

  // loginWithFB(){
  //   this.auth.loginWithFB();
  // }

}
