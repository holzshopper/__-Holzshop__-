import { Component, OnInit } from '@angular/core';
import { OfferArticleService } from '../../services/offer-article.service';
import { OfferArticle } from '../../models/offerArticle';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.scss']
})
export class EditOfferComponent{
  alternative = false
  errorMessage = false
  objects:OfferArticle[]
  columnsToDisplay = ['id', 'name', 'oldPrice', 'newPrice', 'delete'];
  constructor(private service: OfferArticleService) {
    this.objects = this.service.getOfferArticles();
    this.service.changed.subscribe(() =>
    {
    this.objects = this.service.getOfferArticles();
    });
  }
  
  onDelete(id) {
    this.service.delete(id)
  }

  onAdd(name: HTMLInputElement, oldPrice:HTMLInputElement, newPrice:HTMLInputElement, img:HTMLInputElement ) {
    var oldPriceN = parseInt(oldPrice.value)
    var newPriceN = parseInt(newPrice.value)
    if(name.value != '' && oldPrice.value != '' && newPrice.value != '' && img.value != ''){
      this.service.addOfferArticle(name.value, oldPriceN, newPriceN, img.value)
      this.errorMessage = false;
    } else {
      this.errorMessage = true;
    }
    
  }


  

}
