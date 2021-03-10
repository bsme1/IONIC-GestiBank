import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './entities/models';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseurl: string = 'http://127.0.0.1:86/clients/';

  constructor(private httpClient: HttpClient) { }

  public getAllClient(){
    return this.httpClient.get(this.baseurl + 'list');
  }

  getValidatedClient(){
    return this.httpClient.get(this.baseurl+ 'list/valide');
  }

  getWaitingClient(){
    return this.httpClient.get(this.baseurl+ 'list/attente');
  }

  public postClient(client: Client){
    return this.httpClient.post(this.baseurl + "add", client);
  }
  
 
}
