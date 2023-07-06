import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    NewComponentComponent,
    ParentDataComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
