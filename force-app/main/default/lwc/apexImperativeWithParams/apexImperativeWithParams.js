import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/Account_Example.findAccounts'

export default class ApexImperativeWithParams extends LightningElement {
    searchKey=''
    accounts
    timer
    changeHandler(event){
        window.clearTimeout(this.timer)
        this.searchKey=event.target.value;
        console.log(this.searchKey);
        this.timer = setTimeout(()=>{
            this.callApex()
        },1000)
    }
     callApex(){
        findAccounts({searchText:this.searchKey}).then(result=>{
            this.accounts=result
        }).catch(error=>{
            console.error(error)
        })
     }
}