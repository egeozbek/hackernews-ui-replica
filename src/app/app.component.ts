import {Component, OnInit} from '@angular/core';
import {ContentService} from "./services/content.service";
import {StoryItemInterface} from "./models/story-item.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  foundNews : Observable<StoryItemInterface[]> ;
  constructor(public contentService : ContentService) {

  }

  ngOnInit(): void {
    this.foundNews = this.contentService.getLatestNews(0);
  }

}
