import {Component, OnInit} from '@angular/core';
import {ContentService} from "./services/content.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(public contentService : ContentService) {

  }

  ngOnInit(): void {
    this.contentService.getLatestNews(0).subscribe(
      results => {
        console.log("RESULTS : ",results);
      },
      error => {
        console.log("error : ",error);
      }
    )
  }

}
