import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { ProjectListComponent } from '../project-list/project-list.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  @Input()
  project: Project = new Project;

  constructor(private projectService: ProjectService, private listComponent: ProjectListComponent) { }

  ngOnInit() {
  }
  
  updateActive(active :boolean ){
    this.project.active= active;
  }

  deleteProject(id : number) {
    this.projectService.deleteProject(id);
  }

}
