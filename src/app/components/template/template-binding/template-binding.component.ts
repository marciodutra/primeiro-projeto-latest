import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, NgClass, FormsModule],
  template:`

  <h1>Curso de Angular</h1>
  app-template-variables
  `,
})
export class AppComponent {}
