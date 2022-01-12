import { Component, OnInit, Input, Inject, Injectable } from '@angular/core';
import { Project } from '../Models/project';
import { ProjectService } from '../project.service';
import { ProjectListComponent } from '../project-list/project-list.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
@Injectable({
  providedIn: 'root' 
})
export class ProjectDetailsComponent implements OnInit {
  //@ts-ignore
  id: number;  
  @Input()
  project: Project = new Project;

  constructor(private projectService: ProjectService,private route: ActivatedRoute,
    private router: Router, private listComponent: ProjectListComponent) { }

  ngOnInit() {
    this.project = new Project();

    this.id = this.route.snapshot.params['id'];
    
    this.projectService.getProject(this.id)
      .subscribe(data => {
        console.log(data)
        this.project = data;
      }, error => console.log(error));
  }
  
  updateActive(active :boolean ){
    this.project.active= active;
  }

  deleteProject(id : number) {
    this.projectService.deleteProject(id);
    this.goToList();
  }
  goToList(){
    this.router.navigate(['projects']);
  }

}
