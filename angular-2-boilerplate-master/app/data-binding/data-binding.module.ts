import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputPropertiesComponent } from './input-property.component';
import { OutputPropertyComponent } from './output-property.component';
import { DataBindingComponent } from './data-binding.component';

@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ InputPropertiesComponent, OutputPropertyComponent, DataBindingComponent ],
  exports: [DataBindingComponent]
})
export class DataBindingModule{ }