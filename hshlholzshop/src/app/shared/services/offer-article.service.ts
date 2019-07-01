import { Injectable, Output, EventEmitter } from '@angular/core';
import { OfferArticle } from '../models/offerArticle';
import { Observable, of } from 'rxjs';
import { OFFERARTICLE } from '../mock-data/mockOfferArticle'

@Injectable({
    providedIn: 'root',
  })
  
export class OfferArticleService {
  @Output() changed = new EventEmitter();
  
  getOfferArticle() {
    return of(OFFERARTICLE);
  }

  delete(id:string) {
    OFFERARTICLE.splice(parseInt(id), 1);
    this.changed.emit();
    console.log(OFFERARTICLE)
    }
  
  addOfferArticle(article: OfferArticle) {
    console.log(OFFERARTICLE.length)
    OFFERARTICLE.push(article)
    this.changed.emit
  }
}
