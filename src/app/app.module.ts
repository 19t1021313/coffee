import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { MainComponent } from './component/main/main.component';
import { NekoteaComponent } from './pages/nekotea/nekotea.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { PartnerComponent } from './partner/partner.component';
import { HeaderComponent } from './header/header.component';
import { NhapComponent } from './pages/nhap/nhap.component';

@NgModule({
  declarations: [
    AppComponent,
    NekoteaComponent,
    HomeComponent,
    MainComponent,
    AboutusComponent,
    PartnerComponent,
    HeaderComponent,
    NhapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
