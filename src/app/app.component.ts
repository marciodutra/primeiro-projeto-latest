import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './components/comunicacao-entre-components/input/input.component';
import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { AngularPipesComponent } from './components/pipes/angular-pipes/angular-pipes.component';
import { CustomStringPipe } from './pipes/custom-string.pipe';


@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [RouterOutlet, NewComponent, NewComponent, TemplateVariablesComponent,
     TemplateControlFlowComponent, TemplateDeferrableViewsComponent,
     PaiOuMaeComponent, InputComponent, AngularPipesComponent, CustomStringPipe],

  template: `

  <h1>Curso de Angular</h1>
  <app-angular-pipes />
  `,
})
export class AppComponent {}

