import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[autofocus]',
})

export class AutoFocusDirective implements OnInit  {
    constructor(private element: ElementRef) {
        // setTimeout(() => {
        //     element.nativeElement.focus();
        // }, 700);
    }
    
    ngOnInit() {
        this.element.nativeElement.focus();
    }
}
