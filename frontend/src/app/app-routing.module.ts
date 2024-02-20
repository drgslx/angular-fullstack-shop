import { NgModule } from '@angular/core';
import { ProductsComponent } from './components/pages/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HowToComponent } from './components/pages/how-to/how-to.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ToysComponent } from './components/pages/toys/toys.component';
import { ProductsLandingPageComponent } from './components/pages/products-landing-page/products-landing-page.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:"products", component: ProductsComponent},
  {path:"search/:searchTerm", component: ProductsComponent},
  {path:"searchToy/:toyTerm", component: ToysComponent},
  {path:"products/:id", component: ProductsComponent},
  {path:"tag/:tag", component: ProductsComponent},
  {path:"products-landing-page", component: ProductsLandingPageComponent},
  {path:"toys", component: ToysComponent},
  {path:"about", component: AboutComponent},
  {path:'how-to', component: HowToComponent},
  {path:'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
