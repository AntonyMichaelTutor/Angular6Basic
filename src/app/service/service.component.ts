import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  playerDetails=[];
  constructor(playerService:PlayerService) { 

    this.playerDetails = playerService.details;
    console.log(playerService.details);
  }

  ngOnInit() {
  }

}
