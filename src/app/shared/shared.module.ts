import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FromToComponent } from './component/from-to/from-to.component';

const moduleComponents = [
    FromToComponent
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: moduleComponents,
    exports: moduleComponents
})

export class SharedModule { }