/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { DateAdapter } from '@angular/material/core';
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-driverdetails',
    templateUrl: './driverdetails.template.html'
})

export class driverdetailsComponent extends NBaseComponent implements OnInit {
    dob=Date.now();
    dob2=Date.now();
    consent = false;
    demerit = '';
    gender = '';
    maritalStatus = '';
    constructor(
        private dateAdapter: DateAdapter<Date>
    ) {
        super();
        this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    }

    ngOnInit() {

    }
}
