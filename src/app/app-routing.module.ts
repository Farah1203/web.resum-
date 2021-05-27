import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourComponent } from './cour/cour.component';
import { CssComponent } from './css/css.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { JsComponent } from './js/js.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
  },
  {
    path : 'about',
    component:AboutComponent,
  },
  {
    path : 'contact',
    component:ContactComponent,
  },
  {
    path : 'cour',
    component:CourComponent,
  },
  {
    path :'html',
    component:HtmlComponent,
  },
  {
    path:'css',
    component:CssComponent
  },
  {
    path:'js',
    component:JsComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
