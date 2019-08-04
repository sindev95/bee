import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  title = "Technologies";
  desc = "We deploy the latest technologies to optimize our SaaS application.";
  constructor() { }

  ngOnInit() {
  }

}
