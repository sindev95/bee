import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareerComponent } from './career/career.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TechComponent } from './tech/tech.component';
import { UseCasesComponent } from './use-cases/use-cases.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HexalinkComponent } from './hexalink/hexalink.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'hexalink', component: HexalinkComponent},
  { path: 'use-cases', component: UseCasesComponent},
  { path: 'technologies', component: TechComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'career', component: CareerComponent},
  { path: 'contact-us', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
