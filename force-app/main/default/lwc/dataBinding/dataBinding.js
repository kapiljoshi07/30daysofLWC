import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
  firstName;
  lastName;
  field;

  changeHandler(event){
    console.log(event)
    console.log(event.target.value);
    console.log(event.target.name);
    this.field = event.target.name;
    if(this.field === "firstName") this.firstName = event.target.value;
    if(this.field === "lastName") this.lastName = event.target.value
  }

  get fullNameInCapitals(){
    if(this.firstName && this.lastName) return `${this.firstName} ${this.lastName}`.toUpperCase();
  }
}