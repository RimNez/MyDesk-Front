import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../message.service';
import { Ticket } from '../Models/ticket';
import { TicketService } from '../ticket.service.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
@Injectable({
  providedIn: 'root' 
})
export class MessageListComponent implements OnInit {

  messages:any;
  @Input()
  ticket: Ticket = new Ticket;
  id:number = -1;

  constructor(private messageService:MessageService, private ticketService:TicketService
    ,private router:Router,private route: ActivatedRoute) { }

    ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      //this.ticket = new Ticket();
        
      this.ticketService.getTicket(this.id)
        .subscribe(data => {
          //console.log(data)
          this.ticket = data;
          this.messages=this.ticket.messages;
        }, error => console.log(error));

      console.log(this.ticket)
      this.reloadData();
    }
  
    reloadData() {
      this.ticketService.getTicket(this.id)
        .subscribe(data => {
          //console.log(data)
          this.ticket = data;
          this.messages=this.ticket.messages;
        }, error => console.log(error));
    } 
    deleteMessage(id: number) {
      this.messageService.deleteMessage(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
    goToList(){
      this.router.navigate(['tickets']);
    }

}
