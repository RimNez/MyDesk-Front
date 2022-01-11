import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {

  //@ts-ignore
  id: number; 
  message : Message = new Message;
  submitted = false;

  constructor(private messageService: MessageService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.newTicket();
  }

  newTicket(): void {
    this.submitted = false;
    this.message = new Message();
    this.message.ticket_id = this.id;
  }

  save() {
    this.messageService.createMessage(this.message)
      .subscribe(data => console.log(data), error => console.log(error));
      console.log(this.message.ticket_id)
    this.message = new Message();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
