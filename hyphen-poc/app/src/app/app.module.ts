import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
    MAT_RIPPLE_GLOBAL_OPTIONS,
    RippleGlobalOptions,
} from '@angular/material/core';

import {
    appDeclarations,
    appBootstrap,
    appProviders,
} from './config/declarations';
import { appImportModules } from './config/import-modules';

@NgModule({
    declarations: [...appDeclarations],
    imports: [...appImportModules],
    providers: [
        ...appProviders,
        {
            provide: MAT_RIPPLE_GLOBAL_OPTIONS,
            useValue: <RippleGlobalOptions>{
                disabled: true,
            },
        },
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [...appBootstrap],
})
export class AppModule {}
