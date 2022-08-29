import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input('post')
  post : Post | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
