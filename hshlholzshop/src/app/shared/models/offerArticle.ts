export class OfferArticle {
    public id:number;
    public name:string;
    public oldPrice:number;
    public newPrice:number;
    public img:string;

    constructor(id:number, name:string, oldPrice:number, newPrice:number, img:string) {
    this.id = id;
    this.name = name;
    this.oldPrice = oldPrice;
    this.img = img;
    }
}