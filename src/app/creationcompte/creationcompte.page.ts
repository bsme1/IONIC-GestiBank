import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../entities/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creationcompte',
  templateUrl: './creationcompte.page.html',
  styleUrls: ['./creationcompte.page.scss'],
})
export class CreationcomptePage implements OnInit {

  client : Client;
nom: string;
prenom : string;
tel : number;
email : string;
typedecompte: string;

  constructor(
    private service : ClientService, 
    private router : Router) { }

  ngOnInit() {
  }

  creationCompte(){
      this.client = {
      nom: this.nom,
      prenom: this.prenom,
      tel: this.tel,
      email: this.email,
      role: "CLIENT",
      status: "EN ATTENTE",
      typedecompte: this.compteSelected(),
      motdepasse: " ",
    }

    this.service.postClient(this.client).subscribe(
      response => {
        console.log(response)
        this.router.navigate(["home"])
      }
    )

  }

  compteSelected(){
    return this.typedecompte;
  }

}
