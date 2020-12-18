import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';

import { FlashcardComponent } from './interactions/flashcard/flashcard.component';


@NgModule(
    {
        declarations: [FlashcardComponent],
        imports: [CommonModule, MarkdownModule.forChild()],
        exports: [FlashcardComponent, MarkdownModule]
    }
)

export class SwirlSharedModule {}