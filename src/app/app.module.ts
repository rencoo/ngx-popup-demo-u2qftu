import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { PopupModule } from '@ciri/ngx-popup';

import { AppComponent } from './app.component';
import { BaseComponent } from './base.component';
import { PositionComponent } from './position.component';
import { AnimationsComponent } from './animations.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, PopupModule ],
  declarations: [ AppComponent, BaseComponent, PositionComponent, AnimationsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



