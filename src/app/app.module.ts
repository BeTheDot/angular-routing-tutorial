import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabOneComponent } from './devlog/tab-one/tab-one.component';
import { TabTwoComponent } from './devlog/tab-two/tab-two.component';

@NgModule({
  declarations: [
    AppComponent,
    TabOneComponent,
    TabTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
