import { Component, OnInit } from '@angular/core';
import { OfferArticleService } from '../../services/offer-article.service';
import { OfferArticle } from '../../models/offerArticle';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.scss']
})
export class EditOfferComponent implements OnInit {
  objects:OfferArticle[]
  columnsToDisplay = ['id', 'name', 'oldPrice', 'newPrice'];
  constructor(private service: OfferArticleService) { }
  ngOnInit() {
    this.getOfferArticles()
  }

  getOfferArticles(): void {
    this.service.getOfferArticle()
        .subscribe(objects => this.objects = objects);
  }

  onDelete(id) {
    this.service.delete(id)
  }

}
