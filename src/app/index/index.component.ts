import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = "Revolutionize your business with IT";
  desc = "While the environment surrounding work changes, we propose a new approach using cloud technologies.";
  btntxt = "Check out our product";
  desc1 = "See how you can change old and traditional business management into a new and modernized way working style";

  hexa = "Hexalink";
  beebot = "BeeBot";
  customsol = "Customized solutions";
  maindesc = "Browse our products or consult for solutions we can provide you with.";
  hexadesc = "Our main product, used to increase efficiency of  your office management.";
  beedesc = "An add-on to  Hexalink, used for business process automation.";

}
