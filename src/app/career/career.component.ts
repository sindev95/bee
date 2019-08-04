import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  title = "The People We are Seeking For";

  desc = `We are looking for someone who loves using the latest IT technologies
  and wants to provide contributions of new technologies to the world.

  We are also looking for people with the right skill sets for

  in-house services, development and sales.

  We prioritize someone who is flexible, proactive,

  hard-working, and can communicate well with peers.`;


  ceoMessage = "CEO's Message";
  ceoName = "Hidetoshi Iwasaki";
  ceoPos = "Beee Technology, Inc. ​President and CEO";
  Respect = "Respect each other, discuss openly and be proactive";
  MeetPeople = "I want to meet people who enjoy creating things";

  RespectDesc1 = `In order to make this business a success, it is necessary to notice the "blank zone" that exist between "customers' tasks" and the "latest IT technologies". In order to notice this, it is important to respect various opinions and ideas. I will not deny any opinions immediately. I will listen carefully to your opinions and try to extract information that could help our company grow. I don't know where the "golden eggs" are sleeping. Therefore, even if you are a fresh graduate, you can be actively involved in business operations immediately after joining the company.`;
  RespectDesc2 = `Under these circumstances, what kind of engineer would you like to work with?`;

  ListArr = ['▼ High learning motivation', '▼ Excited about new things', '▼ Humbly listening to the opinions of others', '▼ Coordinative person who can respect the merits of others'];

  RespectDesc3 = `If you think that only your opinions are correct, no matter how high your skill is, it will be difficult for the team to collaborate and progress with the team. If you are willing to recognize each other but you you are willing to grow, the results will come naturally. `;


  MeetDesc1 = `Both the company and the service have to be created by themselves. We hope that only those who say "It looks fun and exciting" knock on our doors.`;
  MeetDesc2 = `Although IT technology is changing rapidly, there are many companies in the world who are still using outdated systems.`;
  MeetDesc3 = `It is extremely courageous to throw away past successes, but it is a very important that a working cycle on the next business be established regardless of past achievements. As far as the IT industry is concerned, companies that cannot adapt to changes are destined to decline.`;

  ceoDesc1 = `We are a new start-up company that develops corporate in-house IT services. Our biggest mission is to develop and propose a system that can solve management issues that corporate customers are having with the latest IT technology.`;
  ceoDesc2 = ` We need to listen to our customers, think of ways to make our products and services known and accepted, and refine our products to high levels in order to compete. It is indeed very tough, but for that, I believe that it is feels very rewarding. Our main target customers are currently still deploying old systems. Therefore, we think that there is a large room for improvement using the latest IT technologies.`;


  employee = "Employee Introduction";
  employeeName = "Jeane Paul Banayat Soliva";
  employeePos = "Engineer";

  friendly = "A friendly environment for discussion and development";

  friendlyDesc1 = "I am a full stack environment from the Philippines. I moved to Japan 10 years ago and has been working as an engineer.";
  friendlyDesc2 = "Under these circumstances, I met with our President, Hidetoshi, and I have been involved since the time the company was founded. Hidetoshi is like a father to me. He can solve any problems! *laugh*";
  friendlyDesc3 = "Because everyone here is kind, we can talk about anything and get along very well. This makes the environment comfortable and thus easy to develop and grow. It is such a wonderful moment when the customer is pleased with the product I was involved in development.";


  workDev = "Work on development without giving up";

  workDevDesc1 = "I have a family of four — a Filipino wife, and two daughters (4 years old and 8 months old). On off-days, I like to spend time with my family. I also  program and play games.";
  workDevDesc2 = "The goal is to make the company bigger. And I dream of a day when our President, Hidetoshi, can attend a big conference and make a presentation.";
  workDevDesc3 = "There are many failures in system development, so I hope that our new members would be someone who is easy to talk to, can communicate well, and work tirelessly and persistently.";
  workDevDesc4 = "I can show you where you can buy cheap PC parts in Akihabara when you join our company *laugh*. In addition to Japanese, there are also people who speak English in our company, so you can learn and improve your English. First things first, if you are interested, apply so that we can meet!";



  constructor() {

  }

  ngOnInit() {
  }

}
