import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import TYPE_FIELD from '@salesforce/schema/Account.Type';

export default class RecordFormDemo extends LightningElement {
    @api recordId;
    @api objectApiName;
    objectName=ACCOUNT_OBJECT;
    fieldList=[NAME_FIELD,RATING_FIELD,INDUSTRY_FIELD,TYPE_FIELD];

    successHandler(event){
        console.log(event.detail.id);
        const showEvent = new ShowToastEvent({
            title:"Account Created",
            message:"Record Id: "+event.detail.id,
            variant: "success"
        })
        this.dispatchEvent(showEvent);
    }


}