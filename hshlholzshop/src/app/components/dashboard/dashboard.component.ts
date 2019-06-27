import { Component, OnInit } from '@angular/core';
import { OfferArticleService } from 'src/app/shared/services/offer-article.service'
import { OfferArticle } from 'src/app/shared/models/offerArticle';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  objects = ['0','1','2','3','4','5','6','7']
  ngOnInit() {
  }

}
