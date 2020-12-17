import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardComponent } from './interactions/flashcard/flashcard.component';


@NgModule(
    {
        declarations: [FlashcardComponent],
        imports: [CommonModule],
        exports: [FlashcardComponent]
    }
)

export class SwirlSharedModule {}