import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private postService : PostService) { }

  summaryPost : Post;

  ngOnInit(): void {
    this.summaryPost = this.postService.getRandomPost();
  }



}
