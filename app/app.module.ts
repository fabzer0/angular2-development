import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PiesListComponent } from './pies-list.component';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    PiesListComponent,
    AppComponent ,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
