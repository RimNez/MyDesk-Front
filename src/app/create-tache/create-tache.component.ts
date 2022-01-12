import { Component, OnInit } from '@angular/core';
import { Tache } from 'src/app/Models/tache';
import { User } from '../Models/user';
import {TacheService} from "../tache.service";

@Component({
  selector: 'app-create-tache',
  templateUrl: './create-tache.component.html',
  styleUrls: ['./create-tache.component.css']
})
export class CreateTacheComponent implements OnInit {

  tache : Tache = new Tache();
  submitted = false;

  constructor(private tacheService: TacheService) { }

  ngOnInit(): void {
    this.newTicket();
  }

  newTicket(): void {
    this.submitted = false;
    this.tache = new Tache();
    this.tache.user = new User();
    this.tache.user.id=parseInt(localStorage.getItem('userId') || 'null');
    //this.ticket.userId = parseInt(localStorage.getItem('userId') || 'null');
  }

  save() {
    this.tacheService.createTache(this.tache)
      .subscribe(data => console.log(data), error => console.log(error));
    this.tache = new Tache();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
