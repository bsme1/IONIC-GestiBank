import { getCurrencySymbol, KeyValue, KeyValuePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Currency, Quotes } from './entities/models';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  
  constructor(private httpClient: HttpClient) { }

  getQuotes(v){ 
    var dataBase = "http://api.currencylayer.com/live?access_key=2a3132429e4e4636b982c1d35036c4ef&currencies="+v+"&format=1/";
    return this.httpClient.get(dataBase);
  }

}

