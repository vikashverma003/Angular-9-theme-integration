import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmspageRoutingModule } from './cmspage-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [ContactFormComponent, PageComponent],
  imports: [
    CommonModule,
    CmspageRoutingModule
  ]
})
export class CmspageModule { }
