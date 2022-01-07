import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../project';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

@Injectable({
  providedIn: 'root' 
})
export class ProjectListComponent implements OnInit {

  projects: any;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
    console.log(this.projects)
  }

  reloadData() {
    this.projects = this.projectService.getProjectsList().subscribe(data => {
      this.projects = data;
      console.log(data)
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

  updateProject(id: number,project :Project){
    this.projectService.updateProject(id,project).subscribe(
      data => {
        console.log(data);
        this.reloadData();
        this.router.navigate(['updateProject', project.id]);
      },
      error => console.log(error));    
  }

  detailProject(id: number){
    this.router.navigate(['detailsProject', id]);
  }
}