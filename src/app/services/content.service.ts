import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StoryItemInterface} from "../models/story-item.interface";
import {switchMap} from "rxjs/operators";
import {forkJoin, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private static HACKER_NEWS_BASE_URL = "https://hacker-news.firebaseio.com/v0/";
  private static ITEM_PATH_URL = "item/"
  private static TOP_STORIES_PATH_URL = "topstories"
  private static JSON_SUFFIX = ".json";
  private static NEWS_PER_PAGE : number = 30;

  constructor(public http : HttpClient) { }

  public getLatestNews(pageNo : number) : Observable<StoryItemInterface[]>{
    return this.getLatestNewsIds()
      .pipe(
        switchMap(newsIds => this.getNewsWithPagination(newsIds,pageNo))
        );
  }

  //https://hacker-news.firebaseio.com/v0/topstories.json
  private getLatestNewsIds() : Observable<number[]> {
    return this.http.get<number[]>(ContentService.HACKER_NEWS_BASE_URL+
      ContentService.TOP_STORIES_PATH_URL+
      ContentService.JSON_SUFFIX);
  }

  private getNewsWithPagination( newsIds : number[] , pageNo : number) : Observable<StoryItemInterface[]>{
    let forkRequests = [];
    const sliceBorders = this.getSliceBorders(pageNo);
    const paginatedIds = newsIds.slice(sliceBorders[0],sliceBorders[1]);
    paginatedIds.forEach( newsId => forkRequests.push(this.getNewsFromId(newsId)));
    return forkJoin(forkRequests);
  }

  private getNewsFromId(newsId : number) : Observable<StoryItemInterface> {
    return this.http.get<StoryItemInterface>(ContentService.HACKER_NEWS_BASE_URL+
      ContentService.ITEM_PATH_URL+
      newsId+
      ContentService.JSON_SUFFIX);
  }

  private getSliceBorders(pageNo : number) : [number,number] {
    return [ContentService.NEWS_PER_PAGE * pageNo, ContentService.NEWS_PER_PAGE * (pageNo+1)] ;
  }

}
