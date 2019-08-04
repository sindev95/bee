import { Contact } from './Services/Contact';
import { BeeServiceService } from './Services/bee-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BeeServiceService]
})
export class AppComponent {

  title = 'tech';

  constructor() { }

}
