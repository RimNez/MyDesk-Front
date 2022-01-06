import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { UpdateProjectComponent } from './update-project/update-project.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProjectComponent,
    ProjectDetailsComponent,
    ProjectListComponent,
    UpdateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
