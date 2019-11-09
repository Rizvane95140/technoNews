import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  results: Observable<any>;
  searchTerm = '';


  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  searchChanged() {
     this.results = this.newsService.searchData(this.searchTerm);
    // this.results.subscribe(res => {

    // });
  }
}
