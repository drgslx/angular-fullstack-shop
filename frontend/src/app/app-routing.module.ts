import { NgModule } from '@angular/core';
import { ProductsComponent } from '../app/components/pages/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HowToComponent } from './components/pages/how-to/how-to.component';
import { ContactComponent } from './components/pages/contact/contact.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:"products", component: ProductsComponent},
  {path:"about", component: AboutComponent},
  {path:'how-to', component: HowToComponent},
  {path:'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
