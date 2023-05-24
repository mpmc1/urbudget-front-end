import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  FooterComponent
]

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[COMPONENTS, MaterialModule]
})
export class SharedModule { }
