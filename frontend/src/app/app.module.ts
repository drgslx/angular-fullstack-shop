import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HowToComponent } from './components/pages/how-to/how-to.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BannerComponent } from './components/partials/banner/banner.component';
import { ToysComponent } from './components/pages/toys/toys.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    HowToComponent,
    ContactComponent,
    BannerComponent,
    ToysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
