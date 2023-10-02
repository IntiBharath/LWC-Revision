import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c'
import { publish,MessageContext } from 'lightning/messageService';

export default class LmsComponentA extends LightningElement {
    inputValue
    @wire(MessageContext)
    messagecontext;

    inputHandler(event){
      this.inputValue = event.target.value;
      console.log(inputValue)
    }

    publishHandler(){
        //publish(this.messageContext, messageChannel, message)
        const message={
            lmsData:{
                value:this.inputValue
            }
        }
        publish(this.messagecontext,SAMPLEMC,message)
    }
}