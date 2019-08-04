import { BeeServiceService } from './../Services/bee-service.service';
import { Contact } from './../Services/Contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contacts: Contact[];

  constructor(private BeeService: BeeServiceService) { }

  ngOnInit() {
  }
  addContact(fullname: string,
    company: string,
    d_type: string,
    j_position: string,
    d_name: string,
    email: string,
    subject: string,
    phone: string,
    message: string): void {

console.log('pressed')

    fullname = fullname.trim()
    company = company.trim()
    d_type = d_type.trim()
    j_position = j_position.trim()
    d_name = d_name.trim()
    email = email.trim()
    subject = subject.trim()
    phone = phone.trim()
    message = message.trim()

    console.log('trimed')
    const newContact: Contact = { fullname, company, d_type, j_position, d_name, email, subject, phone, message } as Contact
    console.log('created')
    this.BeeService.addContact(newContact).subscribe()
    console.log('done')
  }
}
