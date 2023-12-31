import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'

export default class PubSubComponentB extends LightningElement {
    message
    connectedCallback(){
        this.callSubscribe();
    }

    callSubscribe(){
        pubsub.subscribe('componentA', (message)=>{ 
          this.message=message
        })
    }
    
}