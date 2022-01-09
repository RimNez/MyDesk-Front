import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../ticket';
import { TicketListComponent } from '../ticket-list/ticket-list.component';
import { TicketService } from '../ticket.service.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
@Injectable({
  providedIn: 'root' 
})
export class TicketDetailsComponent implements OnInit {
  //@ts-ignore
  id: number;  
  @Input()
  ticket: Ticket = new Ticket;

  constructor(private ticketService: TicketService, private route:ActivatedRoute,
    private router:Router, private ticketList:TicketListComponent) { }

    ngOnInit() {
      this.ticket = new Ticket();
  
      this.id = this.route.snapshot.params['id'];
      
      this.ticketService.getTicket(this.id)
        .subscribe(data => {
          console.log(data)
          this.ticket = data;
        }, error => console.log(error));
    }
    
    updateActive(active :string ){
      this.ticket.etat= active;
    }
  
    deleteTicket(id : number) {
      this.ticketService.deleteTicket(id);
      this.goToList();
    }
    goToList(){
      this.router.navigate(['tickets']);
    }

}
