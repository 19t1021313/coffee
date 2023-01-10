import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { HomeComponent } from './component/home/home.component';
import { NekoteaComponent } from './pages/nekotea/nekotea.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { PartnerComponent } from './partner/partner.component';
import { NhapComponent } from './pages/nhap/nhap.component';
import { GaugauComponent } from './pages/gaugau/gaugau.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'gaugau', component: GaugauComponent },
      { path: 'nhap', component: NhapComponent },
      { path: 'partner', component: PartnerComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'nekotea', component: NekoteaComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
