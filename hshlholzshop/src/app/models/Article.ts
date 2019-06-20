export class Article {
    public id: number;
    public title:string;
    //public facts:Array<string>;
    public preis:string;
    public beschreibung:string;
    public imgUrl:string;

    constructor(id: number=-1) {
        this.id = id;
        this.generateData();
    }
    generateData() {
    
        if(this.id==-1){//Default debug article 

            this.title="Kantholz Buche";
            this.preis="Preis: 500";
            //this.facts["Abmessung"]="4cm*4cm*30cm";
           // this.facts["From"]="Rechteckig";
            this.beschreibung="Das ist das beste Kantholz in Deutschland";
            this.imgUrl='./assets/img/holz.jpg';

        }else{
            //Get data fom DataBase ???
        }


    }

  }
  