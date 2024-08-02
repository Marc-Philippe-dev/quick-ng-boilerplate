import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { Home, LucideAngularModule, Menu } from 'lucide-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    LucideAngularModule.pick({Home , Menu})
  ],
  exports: [
    LucideAngularModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
