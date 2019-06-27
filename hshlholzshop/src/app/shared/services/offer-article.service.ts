import { Output, EventEmitter } from '@angular/core';
import { OfferArticle } from '../models/offerArticle';

export class OfferArticleService {
  private objects: OfferArticle[] = [
    new OfferArticle(1, "Test", 7.99, 9.99, "https://picsum.photos/id/239/3000/3000"),
    new OfferArticle(2, "Test1", 7.99, 9.99, "https://picsum.photos/id/239/3000/3000"),
    new OfferArticle(3, "Test2", 7.99, 9.99, "https://picsum.photos/id/239/3000/3000"),
    new OfferArticle(4, "Test3", 7.99, 9.99, "https://picsum.photos/id/239/3000/3000")
  ];

  @Output() changed = new EventEmitter();
  getAll () {
    return this.objects.slice();
  }
}
