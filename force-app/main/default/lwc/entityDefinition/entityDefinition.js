import { LightningElement, wire } from 'lwc';
import getEntityRecords from '@salesforce/apex/EntitiDefinition.getEntityRecords'


const COLS = [
    {label:'Developer Name',fieldName:'DeveloperName'},
    {label:'LastModifiedBy',fieldName:'LastModifiedBy'}
]

export default class EntityDefinition extends LightningElement {
    entities
    columns = COLS;

   @wire(getEntityRecords)
   entityHandler({data,error}){
    if(data){
        console.log(data)
        // data = {DeveloperName: 'Credit_Cards', LastModifiedById: '0052w00000G9qv9AAB', Id: '000000000000000AAA', DurableId: '01I2w000004HQlI', 
        //LastModifiedBy: {…}}
        this.entities = data.map(item =>{
            let LastModifiedBy = item.LastModifiedBy.Name;
            console.log(LastModifiedBy)
            return {...item, LastModifiedBy}
        })
    }if(error){
        console.error(error)
    }
   }
  }
