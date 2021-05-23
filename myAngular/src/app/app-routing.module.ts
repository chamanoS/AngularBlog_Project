import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './Component/add-blog/add-blog.component';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:"add-blog", component:AddBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
