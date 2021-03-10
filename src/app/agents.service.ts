import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agent } from './entities/models';


@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  baseurl: string = 'http://127.0.0.1:86/agents/';

  constructor(private httpClient: HttpClient) { }

  public getAllAgents(){
    return this.httpClient.get(this.baseurl + 'list');
  }


  public postClient(agents: Agent){
    return this.httpClient.post(this.baseurl + "add", agents);
  }
  
 
}
