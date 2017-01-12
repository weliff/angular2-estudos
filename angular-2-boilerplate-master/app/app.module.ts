import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';    
import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingModule } from './data-binding/data-binding.module';


@NgModule({
  imports:      [ BrowserModule, CursosModule, DataBindingModule ],
  declarations: [ AppComponent, MeuPrimeiroComponent, ViewChildComponent],
  bootstrap:    [ AppComponent ]
})  
export class AppModule { }