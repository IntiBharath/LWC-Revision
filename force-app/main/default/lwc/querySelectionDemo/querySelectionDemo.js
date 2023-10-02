import { LightningElement } from 'lwc';

export default class QuerySelectionDemo extends LightningElement {

    userNames =["Bharath","Prashanth","Ruby","Rambo","Surya","Tulasi"];

 fetchDetails(){
    const elem = this.template.querySelector('p');
    console.log(elem.innerText);
    elem.style.border="2px dashed red";
    const elem1 = this.template.querySelectorAll('.name');
    Array.from(elem1).forEach(item =>{
        item.setAttribute("title", item.innerText)
        console.log(item.innerText)
    })
    //lwc:dom="manual"
    const childElement = this.template.querySelector('.child');
    childElement.innerHTML='<P> Hey, I am a child Element</p>';
 }

}