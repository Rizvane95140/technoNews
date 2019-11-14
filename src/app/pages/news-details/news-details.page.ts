import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {

  information = null;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    console.log(this.newsService.articleCourant);
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }

}
