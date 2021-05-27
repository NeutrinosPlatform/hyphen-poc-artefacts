/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-dashboard',
    templateUrl: './dashboard.template.html'
})

export class dashboardComponent extends NBaseComponent implements OnInit {
    inView = false;
    constructor() {
        super();
    }

    @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;

    ngAfterViewInit() {
        this.stepper._getIndicatorType = () => 'number';
    }

    ngOnInit() {
        window.addEventListener('scroll', this.hideFooterOnScroll);
    }

    hideFooterOnScroll() {
        let bannerElem = document.getElementById('sticky-banner'); 
        let elem = document.getElementById('footer-container');
        let docElemProp = window.document.documentElement, body = window.document.body;
        let windowElem = window.document.compatMode === "CSS1Compat" && docElemProp || body && body || docElemProp;
        let docViewTop = windowElem.scrollTop;
        let docViewBottom = docViewTop + windowElem.clientHeight;
        let elemTop = elem.offsetTop;
        let elemBottom = elemTop + elem.clientHeight;
        this.inView = ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
        // console.log('inview', this.inView)
        if (this.inView) {
            bannerElem.classList.add('display-none');
        } else {
            bannerElem.classList.remove('display-none');
        }
    }
    
}
