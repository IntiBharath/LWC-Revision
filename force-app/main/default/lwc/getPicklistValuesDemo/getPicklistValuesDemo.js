import { LightningElement, wire } from 'lwc';
import {getPicklistValues,getObjectInfo} from 'lightning/uiObjectInfoApi'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class GetPicklistValuesDemo extends LightningElement {
 @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
  objectInfoProperty

 @wire(getPicklistValues,{recordTypeId:'$objectInfoProperty.data.defaultRecordTypeId',fieldAPiName:INDUSTRY_FIELD})
 industryHandler({data,error}){
   if(data){
     console.log(data)
   }
   if(error){
      console.error(error)
   }
 }

 selectedIndustry = '';

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }

    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }
}