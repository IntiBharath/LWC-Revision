import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Contact.Name'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId'
import TITLE_FIELD from '@salesforce/schema/Contact.title'

export default class RecordEditForm extends LightningElement {
    objectName=CONTACT_OBJECT;
    fields={
        Name:NAME_FIELD,
        Title:TITLE_FIELD,
        Email:EMAIL_FIELD,
        Account:ACCOUNT_FIELD
    }
    resetHandler(){
        const inputFields = this.template.querySelectorAll('lightning-input-field');
        if(inputFields){
            Array.from(inputFields).forEach(item=>{
                item.reset();
            })
        }
    }
}