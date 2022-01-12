import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from '../Models/tache';
import { tacheListComponent } from '../tache-list/tache-list.component';
import { TacheService } from '../tache.service';

@Component({
  selector: 'app-tache-details',
  templateUrl: './tache-details.component.html',
  styleUrls: ['./tache-details.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class tacheDetailsComponent implements OnInit {
  //@ts-ignore
  id: number;
  @Input()
  tache: Tache = new Tache;

  constructor(private tacheService: TacheService, private route:ActivatedRoute,
    private router:Router, private tacheList:tacheListComponent) { }

    ngOnInit() {
      this.tache = new Tache();

      this.id = this.route.snapshot.params['id'];

      this.tacheService.getTache(this.id)
        .subscribe(data => {
          console.log(data)
          this.tache = data;
        }, error => console.log(error));
    }

    updateActive(active :string ){
      this.tache.etat= active;
    }

    deletetache(id : number) {
      this.tacheService.deleteTache(id);
      this.goToList();
    }
    goToList(){
      this.router.navigate(['taches']);
    }

}
