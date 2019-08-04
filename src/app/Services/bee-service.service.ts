import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Contact } from './Contact';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BeeServiceService {


  constructor(private http: HttpClient) {
  }


  addContact(contact: Contact): Observable<Contact> {
    return this.http
      .post<Contact>('api/contact', contact)
  }



}
