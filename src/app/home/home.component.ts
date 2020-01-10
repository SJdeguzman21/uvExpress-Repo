import { Component, OnInit } from '@angular/core';
import { HtmlDataService } from '../html-data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  data: any;
  admin:any;

  constructor(private htmlService: HtmlDataService,
              private auth: AuthService) { }

  ngOnInit() {
      this.htmlService.getCarousel().valueChanges().subscribe(data =>{
        this.data = data;
        }
      )   
      this.auth.admin.subscribe(admin => this.admin = admin)
  }

}
