import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'],
})
export class FlashcardComponent implements OnInit {
  
  constructor() { }

  flipped: boolean = false;
  
  flip(){
    this.flipped = !this.flipped;
  }

  ngOnInit() {}

}
