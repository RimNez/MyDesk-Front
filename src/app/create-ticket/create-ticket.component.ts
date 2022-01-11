import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  ticket : Ticket = new Ticket;
  submitted = false;

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.newTicket();
  }

  newTicket(): void {
    this.submitted = false;
    this.ticket = new Ticket();
    this.ticket.userId = parseInt(localStorage.getItem('userId') || 'null');
  }

  save() {
    this.ticketService.createTicket(this.ticket)
      .subscribe(data => console.log(data), error => console.log(error));
    this.ticket = new Ticket();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}