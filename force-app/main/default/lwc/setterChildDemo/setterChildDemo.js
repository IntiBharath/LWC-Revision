import { LightningElement, api } from 'lwc';

export default class SetterChildDemo extends LightningElement {
    userDetails={};
    @api
    get detail(){
     return this.userDetails;
    }

    set detail(data){
        let newAge = data.age*2;
         this.userDetails={...data,age:newAge,location:'India'}
    }
}