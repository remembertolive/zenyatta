import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { PhotoBlogComponent } from './components/photo-blog/photo-blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'about', 
    component: AboutComponent
  },
  {
    path: 'blog', 
    component: BlogComponent
  },
  {
    path: 'photos', 
    component: PhotoBlogComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'blog/:id', 
    component: BlogDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
