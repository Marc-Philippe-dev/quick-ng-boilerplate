import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
 
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './blocks/root/app.component';
import { BlocksModule } from './blocks/blocks.module';
import { CoreModule } from './core/core.module';
 

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BlocksModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
