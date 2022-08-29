import { Component, OnInit } from '@angular/core';
import { Author } from '../../models/author.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  constructor() { }

  authors : Author[] = [{
    image: "https://i.imgur.com/ZONK2Mi.png",
    name: "Sexy Mouse"
  },
  {
    image: "https://i.imgur.com/clE9M1t.gif",
    name: "Donald Trump"
  }]

  ngOnInit(): void {
  }

}
