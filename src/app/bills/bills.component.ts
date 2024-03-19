import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css'
})
export class BillsComponent {

   billForm= new FormGroup({
    description:new FormControl(''),
    ownerName:new FormControl(''),
    billingPeriod:new FormControl(''),
    maturityDate:new FormControl(''),
    invoiceNo:new FormControl(''),
    invoiceDate:new FormControl(''),
    uploadDocument:new FormControl(''),
    currency:new FormControl(''),
    collateralValue:new FormControl(''),
    marginRate:new FormControl(''),
    charges:new FormControl(''),
    countryCode:new FormControl(''),
    region:new FormControl(''),
    officeLocation:new FormControl(''),
    department:new FormControl(''),
    drawerNo:new FormControl(''),
    fileNo:new FormControl(''),

  
  })
    
onSubmit(){
  alert('submitted');
}
}

