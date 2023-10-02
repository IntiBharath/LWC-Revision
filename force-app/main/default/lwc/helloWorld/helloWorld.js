import Phone from '@salesforce/schema/Account.Phone';
import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {
    /* Two way data binding*/
    name ='Bharath';
    city ='Hyd';

    changeHandler(event){
         this.city = event.target.value;
    }

    /* Track Property */
    @track address={
        fullName:'Bharath',
        phone:'9493880834',

    }

    trackHandler(event){
       this.address.phone = event.target.value;

    /* or by using spread operator
    trackHandler(event){
    this.address = {...this.address,phone:event.target.value}
    } */
    }

    /*Getter Property*/
    users = ['Bharath','Ramesh','Suresh'];
    num1 = 10;
    num2 = 20;
    get firstUser(){
        return this.users[0];
    }
    
    firstNumber(event){
        this.num1 = event.target.value;
    }

    secondNumber(event){
        this.num2 = event.target.value;
    }

    get multiply(){
        return this.num1*this.num2;
    }
}
