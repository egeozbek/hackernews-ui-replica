import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { NewsListItemComponent } from './components/news-list-item/news-list-item.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsListItemComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
