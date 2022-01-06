import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: any;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.projects = this.projectService.getProjectsList().subscribe(data => {
      this.projects = data;
    })
  } 
  deleteProject(id: number) {
    this.projectService.deleteProject(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
