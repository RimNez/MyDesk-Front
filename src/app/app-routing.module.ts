import { ProjectDetailsComponent } from './project-details/project-details.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { LoginFormComponent } from './Auth-Comp/login-form/login-form.component';
import { RegisterFormComponent } from './Auth-Comp/register-form/register-form.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { AddMessageComponent } from './add-message/add-message.component';
import { MessageListComponent } from './message-list/message-list.component';
import {CreateTacheComponent} from "./create-tache/create-tache.component";
import {tacheListComponent} from "./tache-list/tache-list.component";
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'addProject', component: CreateProjectComponent },
  { path: 'detailsProject/:id', component: ProjectDetailsComponent },
  { path: 'updateProject/:id', component: UpdateProjectComponent },
  { path: 'tickets', component: TicketListComponent },
  { path: 'addTicket', component: CreateTicketComponent },
  { path: 'detailsTicket/:id', component: TicketDetailsComponent },
  { path: 'addMessage/:id', component: AddMessageComponent },
  { path: 'listMessage/:id', component: MessageListComponent },
  { path: 'updateTicket/:id', component: UpdateTicketComponent },
  { path: 'addTache', component: CreateTacheComponent },
  { path: 'taches', component: tacheListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
