import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/Models/tache';
import { TacheService } from '../tache.service';

@Component({
  selector: 'app-tache-list',
  templateUrl: './tache-list.component.html',
  styleUrls: ['./tache-list.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class tacheListComponent implements OnInit {

  taches:any;

  constructor(private tacheService: TacheService,private router:Router) { }

  ngOnInit() {
    this.reloadData();
    console.log(this.taches)
  }

  reloadData() {
    this.taches = this.tacheService.getTachelist().subscribe(data => {
      this.taches = data;
      console.log(data)
    })
  }
  deletetache(id: number) {
    this.tacheService.deleteTache(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updatetache(id: number,tache :Tache){
    this.tacheService.getTache(tache.id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
        this.router.navigate(['updatetache', tache.id]);
      },
      error => console.log(error));
  }

  detailtache(id: number){
    this.router.navigate(['detailstache', id]);
  }

  addMessage(id:number){
    this.router.navigate(['addMessage', id]);
  }

  listMessages(id:number){
    this.router.navigate(['listMessage', id]);
  }

}
