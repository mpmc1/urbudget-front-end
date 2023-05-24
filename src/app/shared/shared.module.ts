import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

const COMPONENTS = [
  FooterComponent
]

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule
  ],
  exports:[COMPONENTS]
})
export class SharedModule { }
