import {Component, Input, OnInit} from '@angular/core';
import {StoryItemInterface} from "../../models/story-item.interface";

@Component({
  selector: 'news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.css']
})
export class NewsListItemComponent implements OnInit {

  @Input('newsIndex')
  public newsIndex : number;

  @Input('newsItem')
  public newsItem : StoryItemInterface;

  constructor() { }

  ngOnInit() {
  }

  linkToUrlConverter(targetUrl : string) : string{
    return new URL(targetUrl).hostname;
  }

}
