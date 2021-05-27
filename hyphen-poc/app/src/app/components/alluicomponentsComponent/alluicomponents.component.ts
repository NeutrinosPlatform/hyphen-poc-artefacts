/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, ViewChild } from '@angular/core';
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
    selector: 'bh-alluicomponents',
    templateUrl: './alluicomponents.template.html',
})
export class alluicomponentsComponent extends NBaseComponent implements OnInit {
    abc = ['asdasd', 'adsdasd', 'asdadsads', 'hghghg'];
    constructor() {
        super();
    }
    @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;

    ngAfterViewInit() {
        this.stepper._getIndicatorType = () => 'number';
    }

    ngOnInit() {}
}
