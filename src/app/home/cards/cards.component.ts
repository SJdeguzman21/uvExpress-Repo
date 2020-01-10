import { Component, OnInit } from '@angular/core';
import { HtmlDataService } from 'src/app/html-data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
data: any;
  constructor(private htmlService: HtmlDataService) { }

  ngOnInit() {
      this.htmlService.getAll().valueChanges().subscribe(data =>{
        this.data = data;
      }
       )
       
  }

}
