import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c'
import {subscribe,MessageContext,unsubscribe } from 'lightning/messageService';

export default class LmsComponentB extends LightningElement {
    receivedMessage
    subscription
    @wire(MessageContext)
    messageContext

    connectedCallback(){
        this.subscribeHandler();
    }

    // subscribe(messageContext, messageChannel, listener, subscriberOptions(optional))
    //listener function will receive the message
    subscribeHandler(){
    this.subscription = subscribe(this.messageContext,SAMPLEMC,(message)=>{this.handleMessage(message)})
    }

    handleMessage(message){
     this.receivedMessage = message.lmsData.value? message.lmsData.value:'No message received'
    }

    unSubscribeHandler(){
      unsubscribe(this.subscription)
      this.subscription = null;
    }
}