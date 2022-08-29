import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './modules/blogging/pages/authors/authors.component';
import { BloglistComponent } from './modules/blogging/pages/bloglist/bloglist.component';
import { SummaryComponent } from './modules/blogging/pages/summary/summary.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'summary',
    pathMatch: 'full'
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent
  },
  {
    path: 'blog',
    component: BloglistComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
