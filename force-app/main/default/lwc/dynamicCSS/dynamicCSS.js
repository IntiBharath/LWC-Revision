import { LightningElement } from 'lwc';

export default class DynamicCSS extends LightningElement {
    num1 =10
    changeHandler(event){
     this.num1 = event.target.value
    }

    get percentage(){
        return `width:${this.num1}%`
    }
}