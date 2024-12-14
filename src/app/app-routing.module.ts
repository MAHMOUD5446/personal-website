import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CanDoComponent } from './can-do/can-do.component';
import { ProjectsComponent } from './projects/projects.component';
import { SendMassageComponent } from './send-massage/send-massage.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skill', component: CanDoComponent },
  { path: 'project', component: ProjectsComponent },
  { path: 'contact', component: SendMassageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
