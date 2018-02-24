import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaterialModule } from './mat.module';
import { FilterDataTable } from './FilterDataTable/FilterDataTable';


@NgModule({
  declarations: [
    AppComponent, FilterDataTable
  ],
  imports: [
    BrowserModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
