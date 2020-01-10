import { Component, OnInit } from '@angular/core';
import { HtmlDataService } from '../html-data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  data: any;
  user1:any;
  user: any = false;
  admin:any;
  constructor(private htmlService: HtmlDataService,
              private auth: AuthService)
              { }

  ngOnInit() {
      this.htmlService.getNavbarImg().valueChanges().subscribe(data =>{
        this.data = data;
          } )
        this.auth.admin.subscribe(admin => this.admin = admin)
        
        this.auth.user$.subscribe(user => 
          {
            this.user = true;
            if(user == null){
              this.user = false
            }
          })
      
      //  this.auth.userLogOn$.subscribe(
      //    (user : boolean) =>{
      //      this.user = user;
      //     }
      // )
  }

  logout(){
    this.auth.logout();
  }

}
