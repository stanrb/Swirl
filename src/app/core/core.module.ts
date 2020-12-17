import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule(
    {
        declarations: [],
        imports: [CommonModule],
        exports: []
    }
)

export class SwirlCoreModule {
    constructor(@Optional() @SkipSelf() core:SwirlCoreModule ){
        if (core) {
            throw new Error("You should import the Swirl Core Module only in the root module.")
        }
      }
}