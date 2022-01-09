import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../ticket';
import { TicketDetailsComponent } from '../ticket-details/ticket-details.component';
import { TicketService } from '../ticket.service.service';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {

  id: number =-1;
  //@ts-ignore
  ticket: Ticket;
  submitted: boolean = false;

  constructor(private ticketService: TicketService, private route:ActivatedRoute,
    private router:Router, private detailTicket:TicketDetailsComponent) { }

    ngOnInit() {
      this.ticket = new Ticket();
  
      this.id = this.route.snapshot.params['id'];
      
      this.ticketService.getTicket(this.id)
        .subscribe(result1 => {
          this.ticket = result1;
          console.log(result1);
        }, error => console.log(error));
    }
  
    updateTicket() {
      this.ticketService.updateTicket(this.id,this.ticket)
        .subscribe(result => {
          console.log(result);
          this.ticket = new Ticket();
          this.gotoList();
        }, error => console.log(error));
    }
  
    onSubmit() {    
      this.submitted = true;
      this.updateTicket();    
    }
  
    gotoList() {
      this.router.navigate(['/tickets']);
    }
  
    updateActive(flag:string){
      this.detailTicket.updateActive(flag);
    }

}
