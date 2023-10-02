import { LightningElement, wire } from 'lwc';
import getFilteredAccount from '@salesforce/apex/Account_Example.getFilteredAccount'

export default class ApexWireWithParams extends LightningElement {
    selectedRating=''
    @wire(getFilteredAccount,{rating:'$selectedRating'})
    filteredAccounts

    get ratingOptions(){
        return [{label:"Hot",value:"Hot"},
                {label:"Warm",value:"Warm"},
                {label:"Cold",value:"Cold"}
            ]
    }

    picklistHandler(event){
        this.selectedRating=event.target.value;
    }
}