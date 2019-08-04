import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  title = "Our Vision";
  desc = "\"To help corporates smoothen out their business operations  using the latest technologies.\"";
  vision = "Vision Background";

  t1 = "Traditional ways...";
  t2 = "into new ways...";
  t3 = "to achieve growth!";

  d1 = "Many companies are still managing their operations using traditional methods...";
  d2 = "...despite the fact that IT technology has advanced significantly over the years. We want to help you...";
  d3 = "...to achieve the efficiency you need to further grow your company by implementing IT management modernization!";

  focus = "Our Focus";
  cloud = "Cloud technology";
  tech = "Infusing technology into management";
  dc1 = "Many trusted and proven technologies are still not used in corporate systems. We provide truly valuable technology to our customers with the right knowledge and experience.";
  dc2 = "Both management and technical knowledge are essential when implementing IT systems in a company. We propose not only IT know-how but also how to utilize it for management output based on various cloud services like SaaS and other latest technologies.";


  tt1 = "Beee Technology, Inc.";
  tt2 = "Industry";
  tt3 = "CEO";

  td1 = "Information Technology";
  td2 = "Hidetoshi Iwasaki";
  
  constructor() { }

  ngOnInit() {
  }

}
