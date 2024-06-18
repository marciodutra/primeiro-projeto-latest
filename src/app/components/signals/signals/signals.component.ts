import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal('Marcio ');
  public lastName = signal('Dutra');

  public fullName = computed( () =>{
    return this.firstName() + this.lastName()
  })

  public array = signal([1]);

  constructor() {

  }

  public updateName() {
    return this.firstName.update(() => {
      return "João"
    })
  }

  public updateArray() {
    this.array.update( (oLdValue: Array<number>) => {
      return [...oLdValue, oLdValue.length + 1]
    })
  }

}
