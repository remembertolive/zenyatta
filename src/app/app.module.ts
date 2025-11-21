import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PhotoBlogComponent } from './components/photo-blog/photo-blog.component';
import { AboutComponent } from './components/about/about.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { TopTitleComponent } from './components/top-title/top-title.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownMenuComponent,
    HomeComponent,
    BlogComponent,
    PhotoBlogComponent,
    AboutComponent,
    BannerComponent,
    NavbarComponent,
    ContactComponent,
    TopTitleComponent,
    BlogDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
