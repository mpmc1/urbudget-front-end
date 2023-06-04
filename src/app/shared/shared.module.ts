import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

import { RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';


const COMPONENTS = [
  FooterComponent,
  AboutComponent,
]

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,   
  ],
  exports:[COMPONENTS]
})
export class SharedModule { }
