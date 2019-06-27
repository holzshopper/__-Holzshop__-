import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  filter: FormGroup;
  @Output() messageEvent = new EventEmitter<FormGroup>();
  tester: string ="hurensohn";
  hoelzer: Holz[] = [
    {value: null, viewValue: 'Alle'},
    {value: 'Buche', viewValue: 'Buche'},
    {value: 'Eiche', viewValue: 'Eiche'},
    {value: 'Birke', viewValue: 'Birke'},
    {value: 'Nussbaum', viewValue: 'Nussbaum'}
  ];

  bettenden: Bettende[] = [
    {value: null, viewValue: 'Alle'},
    {value: 'eckig', viewValue: 'Eckig'},
    {value: 'rund', viewValue: 'Rund'},
    {value: 'oval', viewValue: 'Oval'},
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
   this.tester='das ist ein Test'
   this.filter = this.fb.group({
      BilderrahmenRechteckig: false,
      BilderrahmenQuadratisch: false,
      BilderrahmenKantenRund: false,
      FußbödenRechteckig: false,
      FußbödenQuadratisch: false,
      TischRechteckig: false,
      TischQuadratisch: false,
      TischOvalförmig: false,
      TischKreisförmig: false,
      TischKantenRund: false,
      TischPlätze: null,
      BänkePlätze: null,
      BänkeFüße: null,
      StühleMitLehne: false,
      StühleOhneLehne: false,
      StühleRunderSitz: false,
      StühleEckigerSitz: false,
      BettenMinBreite: 0,
      BettenMaxBreite: 500,
      BettenMinLänge: 0,
      BettenMaxLänge: 500,
      BettenEnde: null,
      RegalMinBreite: 0,
      RegalMaxBreite: 500,
      RegalMinLänge: 0,
      RegalMaxLänge: 500,
      RegalMinHöhe: 0,
      RegalMaxHöhe: 500,
      RegalAnzahlFächer: null,
      SchrankMinBreite: 0,
      SchrankMaxBreite: 500,
      SchrankMinLänge: 0,
      SchrankMaxLänge: 500,
      SchrankMinHöhe: 0,
      SchrankMaxHöhe: 500,
      SchrankAnzahlFächer: null,
      SchrankKleiderhacken: null,
      SchrankTür: null,
      BauholzRund: false,
      BauholzEckig: false,
      BauholzBretter: false,
      ZubehörFarbe: false,
      ZubehörLack: false,
      PreisMin: 0,
      PreisMax: 10000000000,
      Holzart: null,
      });
    this.filter.valueChanges.subscribe(console.log,this.sendMessage);

    this.sendMessage();

  }
  sendMessage() {
    console.log('test');
    this.messageEvent.emit(this.filter);
  }
   onReset() {
    this.sendMessage();
    this.filter.setValue({BilderrahmenRechteckig: false,
      BilderrahmenQuadratisch: false,
      BilderrahmenKantenRund: false,
      FußbödenRechteckig: false,
      FußbödenQuadratisch: false,
      TischRechteckig: false,
      TischQuadratisch: false,
      TischOvalförmig: false,
      TischKreisförmig: false,
      TischKantenRund: false,
      TischPlätze: null,
      BänkePlätze: null,
      BänkeFüße: null,
      StühleMitLehne: false,
      StühleOhneLehne: false,
      StühleRunderSitz: false,
      StühleEckigerSitz: false,
      BettenMinBreite: 0,
      BettenMaxBreite: 500,
      BettenMinLänge: 0,
      BettenMaxLänge: 500,
      BettenEnde: null,
      RegalMinBreite: 0,
      RegalMaxBreite: 500,
      RegalMinLänge: 0,
      RegalMaxLänge: 500,
      RegalMinHöhe: 0,
      RegalMaxHöhe: 500,
      RegalAnzahlFächer: null,
      SchrankMinBreite: 0,
      SchrankMaxBreite: 500,
      SchrankMinLänge: 0,
      SchrankMaxLänge: 500,
      SchrankMinHöhe: 0,
      SchrankMaxHöhe: 500,
      SchrankAnzahlFächer: null,
      SchrankKleiderhacken: null,
      SchrankTür: null,
      BauholzRund: false,
      BauholzEckig: false,
      BauholzBretter: false,
      ZubehörFarbe: false,
      ZubehörLack: false,
      PreisMin: 0,
      PreisMax: 10000000000,
      Holzart: null});


  }
}


  export interface Holz {
    value: string;
    viewValue: string;

  }
  export interface Bettende {
    value: string;
    viewValue: string;

  }
