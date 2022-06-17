import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseDrawerModule } from '@fuse/components/drawer';
import { LayoutComponent } from 'app/layout/layout.component';

import { ModernLayoutModule } from 'app/layout/layouts/horizontal/modern/modern.module';
import { ClassyLayoutModule } from 'app/layout/layouts/vertical/classy/classy.module';
import { SharedModule } from 'app/shared/shared.module';


const layoutModules = [
    // Horizontal navigation
    ModernLayoutModule,
    // Vertical navigation
    ClassyLayoutModule,
];

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports     : [
        MatIconModule,
        MatTooltipModule,
        FuseDrawerModule,
        SharedModule,
        ...layoutModules
    ],
    exports     : [
        LayoutComponent,
        ...layoutModules
    ]
})
export class LayoutModule
{
}
