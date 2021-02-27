import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {DIRECTIVE_ROUTES} from "./directives.routes";

import {RouterModule} from "@angular/router";
import {DirectiveDocumentationComponent} from "./directive-documentation/directive-documentation.component";
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(DIRECTIVE_ROUTES)

  ],
  exports: [],
  declarations: [DirectiveDocumentationComponent, DebounceClickDirective],
  providers: [],
})
export class DirectivesModule {}
