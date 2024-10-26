import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { HomeComponent } from './components/view/home/home.component';
import { BookComponent } from './components/template/book/book.component';
import { AboutComponent } from './components/view/about/about.component';
import { ServiceComponent } from './components/view/service/service.component';
import { ContactComponent } from './components/view/contact/contact.component';
import { FooterComponent } from './components/template/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BookComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
