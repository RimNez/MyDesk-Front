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
import { LoginFormComponent } from './Auth-Comp/login-form/login-form.component';
import { RegisterFormComponent } from './Auth-Comp/register-form/register-form.component';
import { ProjectService } from './project.service';
import { UserServiceService } from './user-service.service';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { AddMessageComponent } from './add-message/add-message.component';
import { MessageListComponent } from './message-list/message-list.component';
import { CreateTacheComponent } from './create-tache/create-tache.component';
import {tacheListComponent} from "./tache-list/tache-list.component";
import {tacheDetailsComponent} from "./tache-details/tache-details.component";


@NgModule({
  declarations: [
    AppComponent,
    CreateProjectComponent,
    ProjectDetailsComponent,
    ProjectListComponent,
    UpdateProjectComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CreateTicketComponent,
    UpdateTicketComponent,
    TicketListComponent,
    TicketDetailsComponent,
    AddMessageComponent,
    MessageListComponent,
    CreateTacheComponent,
    tacheListComponent,
    tacheDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
