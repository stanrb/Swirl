import { Input, Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'swirl-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'],
})
export class FlashcardComponent implements OnInit {

  @Input() flashcardSrc: string;

  constructor(private markdownService: MarkdownService) { }

  flipped: boolean = false;

  flip(){
    this.flipped = !this.flipped;
  }

  ngOnInit() {
    this.markdownService.renderer.heading = (text: string, level: number) => {
      if (level === 2) {
          return '<div class="front front-text">' + text + '</div>';
        } else if (level === 3) {
        return '<div class="back back-text">' + text + '</div>';
      }
    };
  }
}
