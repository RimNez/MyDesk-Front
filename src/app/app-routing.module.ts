import { ProjectDetailsComponent } from './project-details/project-details.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { UpdateProjectComponent } from './update-project/update-project.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectListComponent },
  { path: 'addProject', component: CreateProjectComponent },
  { path: 'detailsProject/:id', component: ProjectDetailsComponent },
  { path: 'updateProject/:id', component: UpdateProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }