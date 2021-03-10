import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './entities/models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: User;

  baseurl: string="http://192.168.25.184:86";

  
  constructor(private httpClient: HttpClient) { }


  public getUsersByMail(email: string){
    return this.httpClient.get(this.baseurl+ '/users/'+email);
  }

 
}