import { Injectable, Output, EventEmitter } from '@angular/core';
import { OfferArticle } from '../models/offerArticle';
import { Observable, of } from 'rxjs';
import { OFFERARTICLE } from '../mock-data/mockOfferArticle'

@Injectable({
    providedIn: 'root',
  })
  
export class OfferArticleService {
  @Output() changed = new EventEmitter();
  
  getOfferArticles() {
    return OFFERARTICLE.slice();
  }

  delete(id:string) {
    OFFERARTICLE.splice(parseInt(id), 1);
    this.changed.emit();
    console.log(OFFERARTICLE)
    }
  
  addOfferArticle(name:string, oldPrice:number, newPrice:number, img:string) {
    const id = this.getMaxId()
    OFFERARTICLE.push(new OfferArticle(id, name, oldPrice, newPrice, img))
    this.changed.emit();
  }

  private getMaxId() {
    return Math.max.apply(Math, OFFERARTICLE.map(function(o) {return o.id; })) + 1;
  }
}
