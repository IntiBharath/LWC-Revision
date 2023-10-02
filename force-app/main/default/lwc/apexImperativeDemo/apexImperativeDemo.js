import { LightningElement } from 'lwc';
import getAccountRecords from '@salesforce/apex/Account_Example.getAccountRecords'
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import ACCOUNT_RATING from '@salesforce/schema/Account.Rating'

const cols =[{label:'Account Name',fieldName:ACCOUNT_NAME.fieldApiName},
             {label:'Rating',fieldName:ACCOUNT_RATING.fieldApiName}   ]

export default class ApexImperativeDemo extends LightningElement {
    accounts
    columns = cols;
    clickHandler(){
        getAccountRecords().then(result=>{
            console.log(result)
            this.accounts=result
        }).catch(error=>{
            console.error(error)
        })
    }

}