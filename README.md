# HackerNews UI Replica

Replica of [HackerNews](https://news.ycombinator.com/) website using Angular 8 and Bootstrap 4 for the frontend part of a full-stack interview assignment.

### Keywords
```
Angular 8, Bootstrap 4, Frontend, Typescript , ForkJoin, Interview Assignment
```

## Usage
```
git clone https://github.com/egeozbek/hackernews-ui-replica
npm install
ng serve
```

## HackerNews API

[API Provided by HackerNews](https://github.com/HackerNews/API) allows users to get ids of the most recent news. To speed up the loading times, (and to prevent sequential calls to the API for each entry) we use forkJoin method to paralellize the network requests.
You can investigate [ContentService](https://github.com/egeozbek/hackernews-ui-replica/tree/master/src/app/services/) for more detail.

## Date Ago Pipe

Inspired by [AndrewPoyntz](https://github.com/AndrewPoyntz/time-ago-pipe), date ago pipe transforms the difference in post time in Unix-time to human readable text.

