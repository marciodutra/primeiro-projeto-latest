import { Component, Input, signal } from '@angular/core';

function toUperCase(value: string) {
  return value.toUpperCase();
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  public name = signal ("Sem dados")

  @Input( {
    required: true,
    transform:toUperCase
  }) set inputName(value: string) {
    this.name.set(value);
  }
}
