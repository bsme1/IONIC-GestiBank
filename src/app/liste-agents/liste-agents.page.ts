import { Component, OnInit } from '@angular/core';
import { Agent } from '../entities/models';

import { AgentsService } from '../agents.service';


@Component({
  selector: 'app-liste-agents',
  templateUrl: './liste-agents.page.html',
  styleUrls: ['./liste-agents.page.scss'],
})
export class ListeAgentsPage implements OnInit {

  agent: Agent;
  agents: Agent[];
  
  constructor(private service: AgentsService) { }

  ngOnInit() {
    this.service.getAllAgents().subscribe(response=>this.agents=(<Agent[]>response));
  }


}
