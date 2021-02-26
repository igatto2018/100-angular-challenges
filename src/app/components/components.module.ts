import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionComponent } from './accordion/accordion.component';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { LoaderComponent } from './loader/loader.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { SharedModule } from '../shared/shared.module';
import { COMPONENTS_ROUTES } from './components.routes';
import { RouterModule } from '@angular/router';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import { FormsModule } from '@angular/forms';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';

@NgModule({
  declarations: [
    ComponentDocumentationComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    LoaderComponent,
    CreditCardInputComponent,
    TwitterPostComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(COMPONENTS_ROUTES),
  ],
  exports: [],
  providers: [],
})
export class ComponentsModule {}
