import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-cases',
  templateUrl: './use-cases.component.html',
  styleUrls: ['./use-cases.component.css']
})
export class UseCasesComponent implements OnInit {

  title = "Use Cases";
  desc = "Select the use-cases of the feature you want to know about.";

  use1 = "API Integration";
  constructor() { }

  ngOnInit() {
  }

}
