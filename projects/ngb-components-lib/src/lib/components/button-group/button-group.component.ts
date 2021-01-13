import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'ngb-button-group',
  templateUrl: './button-group.component.html'
})

export class ButtonGroupComponent {
  constructor(el: ElementRef, render: Renderer2) {
    render.addClass(el.nativeElement, 'btn-group');
    render.setProperty(el.nativeElement, 'role', 'group');
  }
}
