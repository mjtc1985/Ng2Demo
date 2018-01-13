import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { DataService } from './data.service';

@NgModule({
    declarations: [
        HeaderComponent,
        ListComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        HeaderComponent,
        ListComponent
    ],
    providers: [
        DataService
    ],
  })
  export class SharedModule { }