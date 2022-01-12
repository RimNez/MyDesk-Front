import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../Models/message';
import { MessageService } from '../message.service';
import { Ticket } from '../Models/ticket';
import { TicketService } from '../ticket.service.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {

  //@ts-ignore
  id: number;
  message: Message = new Message;
  submitted = false;
  type: any;
  adminId: any;

  constructor(private messageService: MessageService, private ticketService: TicketService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.newMessage();
  }

  newMessage(): void {
    this.submitted = false;
    this.message = new Message();
    this.message.ticket = new Ticket();
    this.message.ticket.id = this.id;
  }

  save() {

    this.messageService.createMessage(this.message)
      .subscribe(data => console.log(data), error => console.log(error));

    this.type = localStorage.getItem("type");
    if (this.type == "admin") {
      this.adminId = localStorage.getItem("adminId");
      console.log(this.adminId + "hi" + this.message.ticket.id);
      this.ticketService.updateAdminId(this.adminId, this.message.ticket.id)
        .subscribe(data => console.log(data), error => console.log(error));
    }
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.router.navigate(['listMessage']);
  }

  gotoMessages() {
    this.router.navigate(['listMessage']);
  }

}
