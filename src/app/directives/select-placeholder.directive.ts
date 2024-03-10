import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'select[placeholder]',
})
export class SelectPlaceholderDirective implements OnInit {
  constructor(private selectElement: ElementRef<HTMLSelectElement>) {}

  @Input() placeholder: string;
  ngOnInit() {
    const placeholderText =
      this.placeholder ||
      this.selectElement.nativeElement.getAttribute('placeholder');

    const placeholderOption = document.createElement('option');
    placeholderOption.value = '';
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    placeholderOption.textContent = placeholderText;
    this.selectElement.nativeElement.prepend(placeholderOption);
  }
}
