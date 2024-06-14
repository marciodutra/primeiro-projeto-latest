import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent, NewComponent, TemplateVariablesComponent],
  
  template: `
  <router-outlet />
  <h1>Curso de Angular</h1>
  <app-template-binding/>
  `,
})
export class AppComponent {}

