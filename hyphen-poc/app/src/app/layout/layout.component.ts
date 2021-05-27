import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NLocalStorageService, NTokenService } from 'neutrinos-seed-services';

@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet> <n-snackbar></n-snackbar>
    `,
})
export class LayoutComponent {
    icons = [
        { name: 'visibility' },
        { name: 'visibility_off' },
        { name: 'complete' },
    ];
    constructor(
        private nLocalstorage: NLocalStorageService,
        private nTokenService: NTokenService,
        iconRegistry: MatIconRegistry,
        sanitizer: DomSanitizer
    ) {
        this.icons.forEach((icon) => {
            iconRegistry.addSvgIcon(
                icon.name,
                sanitizer.bypassSecurityTrustResourceUrl(
                    `../assets/Web/Icons/${icon.name}.svg`
                )
            );
        });
    }
    ngOnInit() {
        if (this.nLocalstorage.getValue('accessToken')) {
            this.nTokenService.updateSessionStorage();
        }
    }
}
