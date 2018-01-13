import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { DataService } from './data.service';
import { IdFormatterPipe } from './idFormatter/idFormatter.pipe';

@NgModule({
    declarations: [
        HeaderComponent,
        ListComponent,
        IdFormatterPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        HeaderComponent,
        ListComponent,
        IdFormatterPipe
    ],
    providers: [
        DataService
    ],
  })
  export class SharedModule { }