import { Injectable } from '@angular/core';
import { OfferArticle } from '../models/offerArticle';
import { Observable, of } from 'rxjs';
import { OFFERARTICLE } from '../mock-data/mockOfferArticle'

@Injectable({
    providedIn: 'root',
  })
  
export class OfferArticleService {
  
  getOfferArticle(): Observable<OfferArticle[]> {
    return of(OFFERARTICLE);
  }
}
