import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { PIPES_ROUTES } from './pipes.routes';
import { TruncatePipe } from './truncate/truncate.pipe';
import { SharedModule } from '../shared/shared.module';
import { CreditCardFormatterPipe } from './credit-card-formatter/credit-card-formatter.pipe';

@NgModule({
  declarations: [PipeDocumentationComponent, TruncatePipe, CreditCardFormatterPipe],
  imports: [CommonModule, SharedModule, RouterModule.forChild(PIPES_ROUTES)],
})
export class PipesModule {}
