import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hexalink',
  templateUrl: './hexalink.component.html',
  styleUrls: ['./hexalink.component.css']
})
export class HexalinkComponent implements OnInit {

  title = "Achieve efficiency and integration through a new working style";
  desc = "A versatile tool applicable across all departments and external parties.";
  btntxt = "Consult with us";

  p1 = 'Your own';
  p2 = ' build,';
  p3 = 'Your own';
  p4 = ' mechanism.'
  p5 = 'Build your own';
  p6 = ' working environment.';

  tv = "Table view";
  gv = "Grid view";
  bv = "Board view";

  import = "Import, view, and edit your data in 3 different modes";
  sub = "A little something for every employee in your company, each designed specifically for convenience and fast-learning.";



  wq1 ="Increase working efficiency";
  wq2 ="Achieve system modernization at a cheap price";
  wq3 ="Everything at the same place";
  wq4 ="Cutomization for your needs";

  wt1 ="Using Hexalink will definitely help in improving employees working speed as it provides a platform where everyone can work in. The flow of business management and operations will be significantly enhanced as there is almost no wasted time on waiting for one process to go to the next.";
  wt2 ="Changing your management from traditional pen-and-paper method to IT systems means greatly reducing tangible costs. Hexalink is priced competitively, making sure that you can achieve modernization much quicker and cheaper than creating your own inbound IT system.";
  wt3 ="All your data will be stored in one place. Hexalink made it convenient for everybody to search for data so that they can start work immediately. It will also keep everyone across departments on the same page and updated in real time";
  wt4 ="Hexalink is extremely versatile and flexible, thus making it possible to be used across different industries and departments. You can add your own features using API Javascript, or we can make the customizations for you.";

  constructor() { }

  ngOnInit() {
  }

}
