import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';


const MATERIAL_COMPONENTS = [
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,

]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_COMPONENTS,
  ],
  exports:[MATERIAL_COMPONENTS]
})
export class MaterialModule { }
