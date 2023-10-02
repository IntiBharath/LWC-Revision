import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={}// For storing answers
    correctAnswers=0 // to show the number of correct answers
    isSubmitted = false// use to the show the result

    myQuestions=[
    {
      id:"Question1",
      question:"What is the capital of India?",
      answers:{
        a:"Hyderabad",
        b:"Mumbai",
        c:"New Delhi",
        d:"Punjab"
      },
      correctAnswer: "c"
    },
    {
      id:"Question2",
      question:"When did World War1 occurred?",
      answers:{
        a:"1939 - 1945",
        b:"1914 - 1918",
        c:"1920 - 1925",
        d:"1931 -1935"
      },
      correctAnswer: "b"
    },
    {
      id:"Question3",
      question:"which programming languages are used when creating a LWC component?",
      answers:{
        a:"Java",
        b:"Angular-JS",
        c:"Html,CSS & Javascript",
        d:"Node - JS"
      },
      correctAnswer: "c"
    }
]

changeHandler(event){
  console.log("Name",event.target.name);
  console.log("Value",event.target.value);
  const{name,value} = event.target
  /*The above code is equal to 
  const name = event.target.name
  const value = event.target.value*/
  this.selected ={...this.selected,[name]:value}
  // The above code is equal to this.selected ={...this.selected,[Question1]:"a"}
  console.log(JSON.stringify(this.selected));
  // this.selected = {"Question1":"a","Question2":"b","Question3":"c"}
  //To console a javaScript object you need parse it in JSON.Stringify(object)
}

get allNotSelected(){
  return !(Object.keys(this.selected).length ==  this.myQuestions.length)
}

get isScoredFull(){
  // `` is backtick,abobve tab button, String Interpolation
  return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?'slds-text-color_success':'slds-text-color_error'} `
}
//Form Submit Handler
submitHandler(event){
  event.preventDefault()
  let correct = this.myQuestions.filter(item=>this.selected[item.id] == item.correctAnswer);
  this.correctAnswers = correct.length;
  console.log(this.correctAnswers);
  this.isSubmitted = true;

}
//Form reset Handler
resetHandler(){
  this.selected ={};
  this.correctAnswers =0;
  this.isSubmitted = false;
    
}
}