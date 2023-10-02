import { LightningElement, wire } from 'lwc';
import {getObjectInfo} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class GetObjectInfoDemo extends LightningElement {
    defaultRecordTypeId
    // Wire as function
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
     accountDetailHandler({data,error}){
        if(data){
            console.log(data)
            this.defaultRecordTypeId=data.defaultRecordTypeId;
        }if(error){
            console.error(error)
        }
     }
     // Wire as property
     @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
     objectInfoProperty
}