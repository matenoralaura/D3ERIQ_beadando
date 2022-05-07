import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './shared/menu/menu.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { RegComponent } from './pages/reg/reg.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './shared/pipes/custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactComponent,
    MenuComponent,
    GalleryComponent,
    RegComponent,
    LoginComponent,
    AboutComponent,
    ProductsComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
