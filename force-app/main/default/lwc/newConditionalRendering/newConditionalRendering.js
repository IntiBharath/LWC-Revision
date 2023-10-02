import { LightningElement } from 'lwc';

export default class NewConditionalRendering extends LightningElement {
    showText = false;
    clickHandler(){
        this.showText = true;
    }
}