import { Component, OnInit } from '@angular/core';
import { OfferArticleService } from 'src/app/shared/services/offer-article.service'
import { OfferArticle } from 'src/app/shared/models/offerArticle';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ngOnInit() {
  }

}
