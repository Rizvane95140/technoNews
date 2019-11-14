import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  results: Observable<any>;
  searchTerm = '';
  articleCourant: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
  }

  searchChanged() {
     this.results = this.newsService.searchData(this.searchTerm);
    // this.results.subscribe(res => {

    // });
  }

  GoToNewsPageDetails(item) {
    this.newsService.articleCourant = item;
    this.router.navigate(['/news-details']);
  }
}
