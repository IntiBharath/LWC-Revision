import { LightningElement, wire } from 'lwc';
import Id from '@salesforce/user/Id' //Gives Id of the current logged In User
import USER_NAME from '@salesforce/schema/User.Name'
import User_Email from '@salesforce/schema/User.Email'
import {getRecord} from 'lightning/uiRecordApi'
//const fields=[USER_NAME,USER_EMAIL]

export default class WireDemoUserDetail extends LightningElement {
    userId = Id;
    userDetail;
    @wire(getRecord,{recordId:'$userId',fields:[USER_NAME,User_Email]}) 
    // '$userId is to show wire is reactive service
    // or @wire(getRecord,{recordId:'0052w00000G9qv9AAB',fields: fields})
    // In javascript if fields and values are same then @wire(getRecord,{recordId:'0052w00000G9qv9AAB',fields}) shorthand notation
    userDetailHandler({data,error}){
        if(data){
            this.userDetail=data.fields;
            console.log(this.userDetail);
        }
        if(error){
            console.error(error)
        }
        
    }

    @wire(getRecord,{recordId:'0052w00000G9qv9AAB' ,fields:[USER_NAME,User_Email]})
    userDetailProperty

}