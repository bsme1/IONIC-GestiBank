import { Component, OnInit } from '@angular/core';
import { Client } from '../entities/models';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-liste-demandes',
  templateUrl: './liste-demandes.page.html',
  styleUrls: ['./liste-demandes.page.scss'],
})
export class ListeDemandesPage implements OnInit {
  clients: Client[] = [];
  body: Client[] = [];

  constructor(private service: ClientService) {}

  ngOnInit() {
    this.service.getAllClient().subscribe((response) => {
      this.body = <Client[]>response;
      for (var cl of this.body) {
        if (cl.status == 'EN ATTENTE') {
          this.clients.push(cl);
        }
      }
    });
  }
}
  
