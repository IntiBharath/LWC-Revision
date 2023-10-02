import { LightningElement, wire } from 'lwc';
import getAccountRecords from '@salesforce/apex/Account_Example.getAccountRecords'

export default class ApexWireDemo extends LightningElement {
 accountList;
    //Wire Service as Property
 @wire(getAccountRecords)
 accounts

 //Wire as Function
 @wire(getAccountRecords)
 accountHandler({data, error}){
    if(data){
        console.log(data)
        this.accountList = data.map(item=>{
            let newRating = item.Rating === 'Hot'?'Ferrari':item.Rating === 'Cold'?'Lamborghini':'Alcazar'
            return {...item, newRating}
            //The above is equal to {...item,newRating:"Hot"}
        })
    }if(error){
        console.error(error)
    }
 }
}