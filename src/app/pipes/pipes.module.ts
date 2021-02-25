import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { PIPES_ROUTES } from './pipes.routes';

@NgModule({
  declarations: [PipeDocumentationComponent],
  imports: [CommonModule, RouterModule.forChild(PIPES_ROUTES)],
})
export class PipesModule {}
