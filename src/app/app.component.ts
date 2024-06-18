import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';


@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [RouterOutlet, NewComponent, NewComponent, TemplateVariablesComponent,
     TemplateControlFlowComponent, TemplateDeferrableViewsComponent],

  template: `

  <h1>Curso de Angular</h1>
  <app-signals />
  `,
})
export class AppComponent {}

