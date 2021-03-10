import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from '../entities/models';
import { ConversionService } from '../conversion.service';


@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.page.html',
  styleUrls: ['./conversion.page.scss'],
})
export class ConversionPage implements OnInit {

  public myQuotes : number;
  public devise ;
  public montant: number = 0;
  public quotes; //: Quotes;
  public rate: number = 0;
  public resultat : number = 0;

  constructor(public http: HttpClient, private service : ConversionService) { }

  ngOnInit() {
console.log("OK");
  }

  /*clickF(){

    this.myQuotes = this.service.getQuotes("EUR");
    //console.log(this.myQuotes);

  }*/

  codeSelected(){
    //console.log(this.devise);
      this.service.getQuotes(this.devise).subscribe((data) => {
      this.quotes = (data['quotes']);
      var keys = Object.keys(this.quotes);
      var key = keys[0];
      //console.log(this.quotes[key]);
      this.myQuotes = (<number>this.quotes[key]);
    });;
    //console.log(this.myQuotes);
  }

  convert(){
    //console.log(this.myQuotes*this.montant);
    this.resultat = this.myQuotes*this.montant;
  }

}
