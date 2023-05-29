import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HeaderColorDirective } from './directives/headerColor/header-color.directive';

const COMPONENTS = [FooterComponent, HeaderComponent];

@NgModule({
  declarations: [COMPONENTS, HeaderColorDirective],
  imports: [CommonModule, RouterModule],
  exports: [COMPONENTS],
})
export class CoreModule {}
