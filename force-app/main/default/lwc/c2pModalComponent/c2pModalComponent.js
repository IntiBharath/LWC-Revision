import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    closeHandler(){
        const myEvent = new CustomEvent('close', {
            detail:{
                name:"Bharath",
                Phone:"123456"
            }
        });
        this.dispatchEvent(myEvent);
    }
}