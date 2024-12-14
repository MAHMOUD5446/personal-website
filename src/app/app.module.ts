import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CanDoComponent } from './can-do/can-do.component';
import { ProjectsComponent } from './projects/projects.component';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SendMassageComponent } from './send-massage/send-massage.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { NavBootstrapComponent } from './nav-bootstrap/nav-bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CanDoComponent,
    ProjectsComponent,

    FooterComponent,
    SidebarComponent,
    SendMassageComponent,
    NavComponent,
    AboutComponent,
    NavBootstrapComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
