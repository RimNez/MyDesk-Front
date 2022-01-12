import { Component, OnInit } from '@angular/core';
import { Project } from '../Models/project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  id: number =-1;
  //@ts-ignore
  project: Project;
  submitted: boolean = false;
   

  constructor(private route: ActivatedRoute,private router: Router,
    private projectService: ProjectService, private detailC : ProjectDetailsComponent) { }

  ngOnInit() {
    this.project = new Project();

    this.id = this.route.snapshot.params['id'];
    
    this.projectService.getProject(this.id)
      .subscribe(result1 => {
        this.project = result1;
        console.log(result1);
      }, error => console.log(error));
  }

  updateProject() {
    this.projectService.updateProject(this.id,this.project)
      .subscribe(result => {
        console.log(result);
        this.project = new Project();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {    
    this.submitted = true;
    this.updateProject();    
  }

  gotoList() {
    this.router.navigate(['/projects']);
  }

  updateActive(flag:boolean){
    this.detailC.updateActive(flag);
  }
}
