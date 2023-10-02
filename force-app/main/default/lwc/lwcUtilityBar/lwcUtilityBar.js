import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import RATING_FIELD from '@salesforce/schema/Account.rating'

export default class LwcUtilityBar extends LightningElement {
    objectName = ACCOUNT_OBJECT
    fieldsList = [NAME_FIELD,RATING_FIELD]

}