import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './pages/summary/summary.component';
import { PostComponent } from './components/post/post.component';
import { BloglistComponent } from './pages/bloglist/bloglist.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PostService } from './services/post.service';


@NgModule({
  declarations: [SummaryComponent,
    AuthorsComponent,
    BloglistComponent,
    PostComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [SummaryComponent, AuthorsComponent, BloglistComponent, PostComponent],
  providers: [PostService]
})
export class BloggingModule { }
