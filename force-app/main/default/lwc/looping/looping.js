import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["Audi","Ford","Maserati","Hyundai","Mercedes","BMW","Tata"];
    ceoList =[
    {
        id:1,
        company:'Salesforce',
        ceo: 'Marc Beniof'
    },
    {
      id:2,
      company: 'Google',
      ceo: 'Sundar Pichai'
    },
    {
        id:3,
        company:'Microsoft',
        ceo:'Satya Nadella'
    },
    {
        id:4,
        company:'Amazon',
        ceo:'Jeff Bezoz'
    }

    ];
}