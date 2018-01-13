import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [
        HeaderComponent,
        ListComponent
    ],
    imports: [

    ],
    exports: [
        HeaderComponent,
        ListComponent
    ],
    providers: [

    ],
  })
  export class SharedModule { }