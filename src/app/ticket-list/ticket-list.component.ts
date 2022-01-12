import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/Models/ticket';
import { TicketService } from '../ticket.service.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
@Injectable({
  providedIn: 'root' 
})
export class TicketListComponent implements OnInit {

  tickets:any;

  constructor(private ticketService: TicketService,private router:Router) { }

  ngOnInit() {
    this.reloadData();
    console.log(this.tickets)
  }

  reloadData() {
    this.tickets = this.ticketService.getTicketsList().subscribe(data => {
      this.tickets = data;
      console.log(data)
    })
  } 
  deleteTicket(id: number) {
    this.ticketService.deleteTicket(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateTicket(id: number,ticket :Ticket){
    this.ticketService.getTicket(ticket.id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
        this.router.navigate(['updateTicket', ticket.id]);
      },
      error => console.log(error));    
  }

  detailTicket(id: number){
    this.router.navigate(['detailsTicket', id]);
  }

  addMessage(id:number){
    this.router.navigate(['addMessage', id]);
  }

  listMessages(id:number){
    this.router.navigate(['listMessage', id]);
  }

}
